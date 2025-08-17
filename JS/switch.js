console.log('connected to switch.js!')

const timerTab = document.getElementById("tabTimer");
const stopWatchTab = document.getElementById("tabStopWatch");

let scriptLoaded = {
    timer: false,
    stopwatch: false
};

// tabによってmain変更
function loadPage(file, scriptPath){
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(".main").innerHTML = data;

            // ③
            if (scriptPath && !document.querySelector(`#dynamic-script-${file}`)) {
                const script = document.createElement("script");
                script.src = scriptPath;
                script.id = `dynamic-script-${file}`; // ファイルごとにユニークID
                document.body.appendChild(script);
            }

            // 復習により①と②を統合した③へ修正。備忘録として敢えて起こしております。
            // ①    if (file === "timer.html" && !scriptLoaded.timer) {
            //         const script = document.createElement("script");
            //         script.src = scriptPath;
            //         script.id = "dynamic-script-timer";
            //         document.body.appendChild(script);
            //         scriptLoaded.timer = true;
            //     }

            //  ②   if (file === "stopwatch.html" && !scriptLoaded.stopwatch) {
            //         const script = document.createElement("script");
            //         script.src = scriptPath;
            //         script.id = "dynamic-script-stopwatch";
            //         document.body.appendChild(script);
            //         scriptLoaded.stopwatch = true;
            //     }
        })
        .catch(error => {
            console.log('読み込みエラー:', error);
            document.querySelector('.main').innerHTML = "<p>読み込みに失敗しました。</p>";
        });
}

// click時にactive
function tabClicked(){
    document.querySelectorAll(".head").forEach(btn => {
        btn.addEventListener("click",()=>{
            // active クラスを全ての head から除去, 今クリックされたタブに active を付与
            document.querySelectorAll(".head").forEach(head => head.classList.remove("active"));
            btn.classList.add("active");
        });
    }); 
}

// 初回にtab_timerを表示
document.addEventListener("DOMContentLoaded", () => {
    tabClicked();
    timerTab.click(); 
});

timerTab.addEventListener("click",() => {
    console.log("click the timeTab")
    loadPage("timer.html", "../JS/timer.js");
})

stopWatchTab.addEventListener("click",() => {
    console.log("click the stopwatchTab")
    loadPage("stopwatch.html", "../JS/stopwatch.js");
})






    
