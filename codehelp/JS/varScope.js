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

// func scope
function hello(){
  var name = "Earth";
 console.log("Hello World!",name); 
}
console.log(name);//not accessable outside function
hello();

//block scope
console.log(height);
{
  var height = 180;
}
console.log(height);
{
  let weight = 89;
}
console.log(weight);

// Temporal dead zone
console.log(marks);
console.log("Bruh");
console.log("Bro");
const marks = 100;
console.log(marks);