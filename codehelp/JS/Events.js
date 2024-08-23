function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent="Hello Boys";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);
// optimal way