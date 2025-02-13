// let name = "jason"
// function outerFunction() {
//     let name = "KHAGENDRA"; //let block scoped variable
//     function innerFunction() {
//         let name = "Gopal"; 
//         console.log(name);
//     }
//     innerFunction();
// }

// outerFunction(); 

//Closure 
function outerFunction() {
    let name = "KHAGENDRA";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();
inner();