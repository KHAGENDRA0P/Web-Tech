let age=25;
if(age>18){
  console.log('Can Vote');
}
else 
  console.log('Cant Vote');

let num = 3;
if(num==1){
  console.log('A');  
}
else if(num==2){
  console.log('B');
}
else if(num==3){
  console.log('C');
}else if(num==4){
  console.log('D');
}
else if(num==5){
  console.log('E');
}
else {
  console.log('F');
}

switch(num){
  case 1: console.log('A');
    break;
  case 2: console.log('B');
    break; 
  case 3: console.log('C');
    break;   
  case 4: console.log('D');
    break;  
  case 5: console.log('E');
    break;   
  default: console.log('W'); 
    break;
}