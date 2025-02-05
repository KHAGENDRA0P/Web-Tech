async function getData() {
    setTimeout(function () {
        console.log('I am inside setTimeout block');
    }, 3000);
}
getData();