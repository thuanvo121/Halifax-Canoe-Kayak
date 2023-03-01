const toggle=document.querySelector('.nav-toggle');
const linkBar=document.querySelector('.links-container');

console.log(toggle);
console.log(linkBar);

toggle.addEventListener('click',function(){
    linkBar.classList.toggle('links-close');
})