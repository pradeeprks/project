const hamburger= document.querySelector(".hamburger");
const navbar=document.querySelector('ul');

hamburger.addEventListener('click',()=>{
  navbar.classList.toggle('slide');
})

var type = new Typed(".typ",{
strings:["html","html","python","React"],
typeSpeed:105,
backSpeed:105,
loop:true
});