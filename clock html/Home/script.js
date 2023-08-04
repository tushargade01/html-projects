const hamber = document.querySelector('.hamb');
const navBox = document.querySelector('.nav-bar');

const days = document.querySelector('.day');
const months = document.querySelector('.month');
const years = document.querySelector('.year');

hamber.addEventListener("click",()=>{
    hamber.classList.toggle('active');
    navBox.classList.toggle('active');
})

const d = new Date();
let day = d.getDate();
let month = d.toLocaleString('default',{month:'long'});
let year = d.getFullYear();
console.log(day);
console.log(month);
console.log(year);


days.innerHTML = day;
months.innerHTML = month;
years.innerHTML = year;
