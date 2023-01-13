const newYearDate = "1 January 2024"
const days  = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const secondes = document.getElementById("seconds")

function countdown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYearDate);

    const totalSecondsLeft = Math.floor((newYearsDate - currentDate) /1000);
    const daysLeft = Math.floor(totalSecondsLeft /86400);
    const hoursLeft = Math.floor(totalSecondsLeft / 3600) % 24;
    const minutesLeft = Math.floor(totalSecondsLeft / 60) % 60;
    const secondsLeft = Math.floor(totalSecondsLeft) % 60;

    days.innerHTML= daysLeft;
    hours.innerHTML=hoursLeft;
    minutes.innerHTML=minutesLeft;
    secondes.innerHTML=secondsLeft;
    
console.log(daysLeft)
console.log(hoursLeft)
console.log(minutesLeft)
console.log(secondsLeft)

}

setInterval(countdown,1000);
countdown();
