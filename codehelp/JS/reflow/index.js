// code 1 
const t1 = performance.now();
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'This is Para ' + i;
    document.body.appendChild(para);
} 
const t2 = performance.now();
console.log("Total time: " + (t2 - t1));

// code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'This is Para ' + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("Total time: " + (t4 - t3));