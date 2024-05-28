// for(let i = 1;i<=10;i++){
//   console.log(i);
// }
// for(let i = 5;i>0;i--){
//   console.log(i);
// }
// for(let i = 1;i<=6;i++){
//   if(i==4)
//     // break;
//     continue;
//   else
//   console.log(i);
// }

let i=1;
while(i<=7){
  console.log('Hi');
  i++;
}

let a=1;
while(a<5){
  if(a==3){
    a++;
    continue;
  }
  else
    console.log(a);
  a++;
}

let d=1;
do{
  console.log("Hello")
  d++;
}while(d<5)
  
let name='GOPAL'
let name1='gopal'
console.log(typeof(name));
let name2=`Gopal 
is
my
name`
console.log(name2);

// let name3 = new String("Kakashi")
// console.log(name3);

let op1='English'
let op2='Hindi'
let ans = `${op1} ${op2}`
console.log(ans)

let string = 'Hello Boys'
console.log(string.substring(3));
console.log(string.substring(2,8));

let sentence = "Hello everyone hpw are you?"
let words = sentence.split(' ');
console.log(words);
console.log(words.join('_'));