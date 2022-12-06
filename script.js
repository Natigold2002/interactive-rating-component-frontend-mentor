//'use strict';

const one =document.getElementById('one');
const two =document.getElementById('two');
const three =document.getElementById('three');
const four =document.getElementById('four');
const five =document.getElementById('five');
let value;
const btn= document.querySelector('.btn');
const card__center= document.querySelector('.card--center');
const card__left= document.querySelector('.card--left');


/* marking the rating*/



one.addEventListener('click',addColour);
two.addEventListener('click',addColour2);
three.addEventListener('click',addColour3);
four.addEventListener('click',addColour4);
five.addEventListener('click',addColour5);

function addColour(){
    one.classList.add('circle--click');
    two.classList.remove('circle--click');
    three.classList.remove('circle--click');
four.classList.remove('circle--click');
five.classList.remove('circle--click');
value= one.textContent;
}

function addColour2(){
    one.classList.remove('circle--click');
    two.classList.add('circle--click');
    three.classList.remove('circle--click');
four.classList.remove('circle--click');
five.classList.remove('circle--click');
value= two.textContent;
}

function addColour3(){
    one.classList.remove('circle--click');
    two.classList.remove('circle--click');
    three.classList.add('circle--click');
four.classList.remove('circle--click');
five.classList.remove('circle--click');
value= three.textContent;
}
function addColour4(){
    one.classList.remove('circle--click');
    two.classList.remove('circle--click');
    three.classList.remove('circle--click');
four.classList.add('circle--click');
five.classList.remove('circle--click');
value= four.textContent;
}
function addColour5(){
    one.classList.remove('circle--click');
    two.classList.remove('circle--click');
    three.classList.remove('circle--click');
four.classList.remove('circle--click');
five.classList.add('circle--click');
value= five.textContent;
console.log(value);
}
// this is button to change the hidden class
btn.addEventListener('click',function(){

card__left.classList.toggle('hidden')
card__center.classList.toggle('hidden')

const html= `<span> You selected ${value}
out of 5</span>`;
const outoffive=document.querySelector('.outoffive');
outoffive.innerHTML = html;
});

x = ()=>{

}
// this is the out of five indicator 
