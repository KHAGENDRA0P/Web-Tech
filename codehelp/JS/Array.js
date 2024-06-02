// Creation of Array
// let arr = [1,2,3,4,5];
// console.log(arr);//array literal
// let brr = new Array('Hey', 1, true,30,50,'Hello');
// console.log(brr);//array constructor
// brr[0];
// brr.push('Kakashi');
// brr.shift();
// brr.unshift('La');
// console.log(brr.slice(2,4 ));
// brr.splice(1,2,'Gopal')
// console.log(brr);

// Map func
let arr = [10,20,30];
let ans = arr.map((number)=>{
  return number*number;
});
console.log(ans);
arr.map((number,index)=>{
  console.log(number);
  console.log(index);
});
// Filter func
let array = [10,20,30,43,51,39,90];
let evenArray = array.filter((number)=>{
  if(number%2==0)
    return true
  else
    return false;
});
console.log(evenArray);
let arra = [1,2,'hi',null,'nig'];
let answ = arra.filter((value)=>{
  if(typeof(value) == 'string') {
    return true;
  }
  else{
    return false;
  }
});
console.log(answ);

// Reduce func
let Arr = [10,20,30,40]
let sum = Arr.reduce((acc,curr)=>{
  return acc + curr;
},0);
console.log(sum);

// Sort func
arr.sort();

// FOr Each
Arr.forEach((value,index)=>{
  console.log("Number is ",value , "Index is" ,index);
})

// For of
for (let value of Arr){
  console.log(value)
}

// Array in Function
let getSum = (Arr)=>{
  let Sum = 0;
  Arr.forEach((value)=>{
    Sum = Sum + value;
  })
  return Sum;
}
let totalSum = getSum(Arr);
console.log(totalSum);