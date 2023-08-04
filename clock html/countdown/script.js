const hamber = document.querySelector('.hamb');
const navBox = document.querySelector('.nav-bar');

hamber.addEventListener("click",()=>{
  hamber.classList.toggle('active');
  navBox.classList.toggle('active');
})

const inputhours = document.querySelector('.input-hor');
const inputminutes = document.querySelector('.input-min');
const inputsecounds = document.querySelector('.input-sec');

const spanHour = document.querySelector('.sp-hour');
const spanminutes = document.querySelector('.sp-min');
const spanseconds = document.querySelector('.sp-sec');

let interval;
let hourTime = inputhours.value;
let minTime = inputminutes.value;
let secTime = inputsecounds.value;

function startTimer(){
  console.log(hourTime)
  if(secTime<9){
    secTime=secTime-1;
    spanseconds.innerHTML = '0'+secTime;
  }
  if(secTime>=10){
    secTime=secTime-1;
    spanseconds.innerHTML = secTime;
  }
  if(secTime>=99){
    minTime--;
    secTime = 0;
    spanseconds.innerHTML =secTime;
  }
  console.log(secTime)
}

function settimer(){
  clearInterval(interval);
  interval = setInterval(startTimer,1000);
}

function clockStop(){
  clearInterval(interval);
}
