const endDate = new Date("18 Feb, 2025 21:16:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = (now - startDate);
    const distancePending = endDate - now;
    const totalDistance = endDate - startDate;
    //calculate days, hrs, mins, sec
    // 1 day = 24x60x60x1000 milliseconds
    const days = Math.floor(distancePending / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distancePending % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distancePending % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distancePending % (1000 * 60)) / 1000);

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("sec").innerHTML = sec;

    // calc % of progress bar
    const percentageDistance = (distanceCovered/ totalDistance) * 100;

    //set width of progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    // check if countdown is over
    if (distancePending <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Countdown is over!";
        document.getElementById("progress-bar").style.width = "100%";
    }
 
}, 1000);
