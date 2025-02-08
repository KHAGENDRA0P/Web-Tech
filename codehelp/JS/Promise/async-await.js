async function getData() {
    setTimeout(function () {
        console.log('I am inside setTimeout block');
    }, 3000);
}
getData();

//await

//Fetch API
async function data() {
    //get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
    // json parsing
    let data = await response.json();
    console.log(data);
    // console.log(response); 
}

data();