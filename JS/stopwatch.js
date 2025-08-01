console.log('connected to stopwatch.js!')

const stopwatch = document.getElementById("stopwatch");

const startWatchBtn = document.querySelector(".start_stopwatch");
const stopWatchBtn = document.querySelector(".stop_stopwatch");
const resetWatchBtn = document.querySelector(".reset_stopwatch");

let gapTime = 0;
let startMs = null;
let intervalWatchID;

////////////////////////

function countUp(){ 
    if (intervalWatchID) return;
    let startMs = Date.now() - gapTime;  // STARTを押した時点のtime
    intervalWatchID = setInterval(() => {
        const nowMs = Date.now(); // 経過後のtime
        gapTime = nowMs - startMs;

        const ms = gapTime % 1000;
        const s = Math.floor(gapTime / 1000) % 60; 
        const m = Math.floor((gapTime / 1000) / 60) % 60;
        const h = Math.floor(gapTime / 3600000) % 60;

        const formatMS = String(ms).padStart(3,'0');
        const formatS = String(s).padStart(2,'0');
        const formatM = String(m).padStart(2,'0');
        const formatH = String(h).padStart(2,'0');

        stopwatch.textContent = `${formatH}:${formatM}:${formatS}.${formatMS}`;
    }, 10);         
};

function setActiveBtn(btn){
    document.querySelectorAll(".btns .btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

////////////////////////


startWatchBtn.addEventListener("click",() => {
    countUp();
    setActiveBtn(stopWatchBtn);
});

stopWatchBtn.addEventListener("click",() => {
    clearInterval(intervalWatchID);
    intervalWatchID = null;

    setActiveBtn(startWatchBtn);
})

resetWatchBtn.addEventListener("click", () => {
    clearInterval(intervalWatchID);
    gapTime = 0;
    stopwatch.textContent = "00:00:00.000";
    intervalWatchID = null;

    setActiveBtn(startWatchBtn);
});

