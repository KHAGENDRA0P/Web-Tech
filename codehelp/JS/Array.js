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
})

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
  if(typeof(value)==String)
})
