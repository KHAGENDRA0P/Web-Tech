class Human {
  // properties
  age = 13; //by default public
  #wt = 80;//private 
  ht = 180;
  
  constructor(newAge,newHt,newWt){
    this.age = newAge;
    this.ht = newHt;
    this.#wt = newWt;
  }
  // behaviour
  #walk(){
    console.log("I am walking" ,this.#wt)
  }
  run(){
    console.log("I am runnong")
  }
  get fetchWt(){
    return this.#wt;
  }
  
  set modifyWt(val){
    this.#wt = val;
  }
}

let obj = new Human(50,190,101);
console.log(obj.age);
console.log(obj.fetchWt);

obj.modifyWt = 10;
console.log(obj.Wt);

obj.walk();