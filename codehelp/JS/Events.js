function changeText(event){
    console.log(event)
    let fpara = document.getElementById('fpara');
    fpara.textContent="Hello Boys";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);
// optimal way

// prevent default methods
let anchor = document.getElementById("link");
anchor.addEventListener('click',function(event){
    event.preventDefault();
    anchor.textContent="Dont Click Me"
})

// let paras = document.querySelectorAll('p');
// for (let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',alertP);
// }
function alertP(clik){
    if(clik.target.nodeName ==='SPAN') {
        alert("You have clicked on para: "+ clik.target.textContent)}
}
let mydiv = document.getElementById('wrapper')
document.addEventListener('click',alertP);

document.addEventListener("DOMContentLoaded", ready);
function ready() {
    alert('DOM is ready');
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }
