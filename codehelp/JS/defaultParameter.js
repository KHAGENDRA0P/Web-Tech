function sayName(fname = "nig",lname = "ger"){
  console.log("My Name is ",fname," ",lname);
}
sayName("KHX");

function solve(val={age:15,ht:190,wt:45}){
  console.log("Hello ",val);
}
solve();


function getAge(){
  return 90;
}
function man(name="KHX",age=getAge()){
  console.log(name,"",age);
}
man();