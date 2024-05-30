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