
// Nav Bar Logic

const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon span");
const items = document.querySelector(".nav-items");
const menuList = document.querySelectorAll(".nav-items li a");

//Phases
const phasesLeft = document.querySelector(".phases-left");
const phases = document.querySelectorAll(".phases-left span");
const phasesContent = document.querySelectorAll(".phases-right .phase-container");

if(screen.width < 1024){
    menuBtn.style.display="block";
}
window.addEventListener("resize", ()=>{
    let screenWidth = screen.width;
    if(screenWidth >= 1024){
        cancelBtn.style.display="none";
        menuBtn.style.display="none";
    }
    else{
        if(items.classList.contains("active")){
            cancelBtn.style.display="block";
            menuBtn.style.display="none"
        }
        else{
            cancelBtn.style.display="none";
            menuBtn.style.display="block";
        }
    }
})
menuBtn.onclick = ()=> {
    cancelBtn.style.display="block";
    menuBtn.style.display="none";
    items.classList.add("active");
}
cancelBtn.onclick = ()=> {
    menuBtn.style.display="block";
    cancelBtn.style.display="none";
    items.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}

menuList.forEach(menuItem => {
    menuItem.addEventListener("click",function(){
        items.classList.remove("active");
    })
})

const subscribeForm = document.getElementById("subscribe-form");

document.addEventListener("click",function(e){
    if(e.target.classList.contains("subscribe-emailInpt")){
        subscribeForm.style.borderColor="#c93357"
    }
    else{
        subscribeForm.style.borderColor="#8e929d";
    }
})




let phaseMapper = new Map();
let count=0;
phasesContent.forEach(phase =>{
    phaseMapper.set(count,phase);
    count++;
})

function loadContainer(phaseNo){
    for(let [key,value] of phaseMapper.entries()){
        if(phaseNo === key){
            value.classList.add("phase-container-active");
            phases[key].classList.add("phase-active");
        }
        else{
            value.classList.remove("phase-container-active")
            phases[key].classList.remove("phase-active");
        }
    }
}
