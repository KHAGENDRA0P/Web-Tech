let obj = {
  name: 'Gopal',
  "full name": "Gopal Bro",
  age: 21,
  greet: function(){
    console.log("Hey  Everyone");
}
};
console.log(obj)
obj.greet();

for (let key in obj){
  console.log(key," ",obj[key]);
}

