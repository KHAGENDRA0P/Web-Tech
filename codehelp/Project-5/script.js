document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("username");
    const statsContainer = document.getElementById(".stats-container");
    const easyProgressCircle = document.getElementById(".easy-progress");
    const mediumProgressCircle = document.getElementById(".medium-progress");
    const hardProgressCircle = document.getElementById(".hard-progress");
    const easyLabel = document.getElementById(".easy-label");
    const mediumLabel = document.getElementById(".medium-label");
    const hardLabel = document.getElementById(".hard-label");
    const cardStatsContainer = document.getElementById(".stats-card");

    //return true/false based on regex
    function validateUsername(username) {
        if (username.trim() === ''){
            alert("Username cannot be Emopty!");
        return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatch = regex.test(username);
        if (!isMatch) {
            alert("Invalid Username!");
            
        }
        return isMatch;
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("Login username:",username);
    })
})
