let src = {
 age:21,
  wt:78,
  ht:189
};
// console.log(obj);
// obj.color = "White"
// console.log(obj);

// spread operator
let dest = {...src}
src.age=90;
console.log("src - ",src);
console.log("dest - ",dest);

// assign 
let destn = Object.assign({},src);
console.log("destn - ",destn);

// iteration
let destination ={};
for(let key in src){
  let newKey = key;
  let newValue = src[key];
// insert newKey and value in dest and create a clone
  destination[newKey] = newValue;
}
console.log("destination - ",destination);
