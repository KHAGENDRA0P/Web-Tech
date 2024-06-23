// // compile time error
// console.lg(1;
           
// // runtime error
// console.log(x);

try{
  console.log("Hello This is Try Block");
  console.log(a);
  console.log("2nd line ");
}
catch(err){
  console.log("Error")
  console.log("The error is ",err);
  
}
finally{
  console.log("Run everytime");
  
}


try{
  console.log(X)
}
catch(e){
  throw "Pehle declare to kar"
}