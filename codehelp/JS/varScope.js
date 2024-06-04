// global scope
var age = 15;
console.log(age);
{
console.log(age);  
}
if(true){
console.log(age);  
}
for (let i=0;i<2;i++){
console.log(age);  
}
function hi(){
console.log("Hi",age);  
}
hi();  