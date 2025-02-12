let name = "jason"
function outerFunction() {
    let name = "KHAGENDRA"; //let block scoped variable
    function innerFunction() {
        let name = "Gopal"; 
        console.log(name);
    }
    innerFunction();
}

outerFunction(); 