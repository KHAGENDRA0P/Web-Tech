// Function expression - assign to var
let greet = function(){
  console.log("Greetings Everyone!");
}
greet();

// Pass as argument
function greetMe(greet, name){
  console.log("Hello ",name);
  greet();
}
greetMe(greet, "Odin");

// retrun func
function solve(){
  return function(number){
    return number*number;
  }
}
let ans = solve();
let finalAns = ans(10);
console.log(finalAns);

// store in DS
const arr = [
  function (a,b){
    return a+b;
  },
  function (a,b){
    return a-b;
  },
  function (a,b){
    return a*b;
  }
];
let first = arr[2];
let sum = first(5,10);
console.log(sum)

// inside obj(func as prop of onj)
let obj = {
  age:25,
  wt:36,
  ht:180,
  greet:()=>{
    console.log("Hello Everyone!");
  }
}
console.log(obj.age);
obj.greet();