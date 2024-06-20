import CONFIG from 'config.js';

const success = document.querySelectorAll('.form-success');
const failure = document.querySelectorAll('.form-fail');

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    forms.forEach((form,idx) => {
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
  
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });
  
        const action = CONFIG.SERVER_URL;
        try {
          const response = await fetch(action, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formObject),
          });
  
          if (response.ok) {
            success[idx].style.display = "block";
            failure[idx].style.display = "none";
          } else {
            if(response.status == 429){
              console.log(response.status);
              failure[idx].innerHTML="Too many requests...";
            }
            success[idx].style.display = "none";
            failure[idx].style.display = "block";
          }
        } catch (error) {
          console.error("Error:", error);
          success[idx].style.display = "none";
          failure[idx].style.display = "block";
        }
        finally{
            form.reset();
            setTimeout(() => {
                success[idx].style.display = "none";
                failure[idx].style.display="none";
            }, 5000);
        }
      });
    });
  });
  