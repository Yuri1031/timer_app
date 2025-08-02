console.log('connected to timer.js!')

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let intervalID;
let totalSec = 0;

////////////////////////
function setActiveBtn(btn){
    document.querySelectorAll(".btns .btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function countDown(){         
    totalSec --;
    if(totalSec >= 0){
        const hrs = Math.floor(totalSec / 3600);
        const mins = Math.floor((totalSec % 3600)/60);
        const sec = Math.floor(totalSec % 60);
        
        hoursInput.value = String(hrs).padStart(2,'0');
        minutesInput.value = String(mins).padStart(2,'0');
        secondsInput.value = String(sec).padStart(2,'0');
        if (totalSec === 0) {
            alert("お時間になりました！");
        }
     } else {
        clearInterval(intervalID)
        console.log("タイマー終了");
    }
}
////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    setActiveBtn(startBtn);
});

startBtn.addEventListener("click",() => {
    console.log("start clicked!");
    setActiveBtn(stopBtn);

    let hours = Number(hoursInput.value);
    let minutes = Number(minutesInput.value);
    let seconds = Number(secondsInput.value);

    totalSec = hours * 3600 + minutes * 60 + seconds;

    if (totalSec > 0) {
        setActiveBtn(stopBtn);
        countDown();   
        
        if (!intervalID) {
            intervalID = setInterval(countDown, 1000);
        }

     } else {
        setActiveBtn(startBtn);
    }
    
});

stopBtn.addEventListener("click",() => {
    clearInterval(intervalID);
    intervalID = null;

    setActiveBtn(startBtn);
});

resetBtn.addEventListener("click",() => {
    clearInterval(intervalID);
    intervalID = null;

    totalSec = 0;
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    setActiveBtn(startBtn);
});
