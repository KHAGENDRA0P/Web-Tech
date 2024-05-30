// func definition
function name(){
  console.log('KHAGENDRA')
}
// use func - calling func
name();

function count(){
  for(let i = 1;i<=10;i++)
    console.log(i)
}
count();

function print(num){
    console.log("Printing Number: ",num)
}
print(5);
 
function getAvg(num1,num2){
  let avg = (num1 +num2)/2;
  console.log("Average: ",avg);
}
getAvg(3,7);

// return func
function getSum(a,b,c){
  let sum = a+b+c;
  return sum;
}
let ans = getSum(1,2,3);
    console.log("print sum",ans)

function getName(fName,lName){
  let fullName = fName+' '+lName;
  return fullName;
  //unreachable statements
  let sum = 10;
}
let fullname = getName("KAKASHI",'UCHIHA')
    console.log(fullname)

const multiplication = function(a,b){
  return a*b;
}
let mult = multiplication(2,10);
    console.log(mult);

// function square(num){
let square = function(num){
  let sq = num**2;
  return sq;
}
let sqr=square(5);
    console.log(sqr)


// function exp(x,y){
//   let a = x**y;
//   return a;
// }
//     console.log(exp(2,5))
// let exp = function (x,y){
//   let a = x**y;
//   return a;
// }
//     console.log(exp(2,10));
let exp = (x,y) => {
  let a = x**y;
  return a;
}
    console.log(exp(2,10));
