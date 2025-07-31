console.log('connected to switch.js!')

document.addEventListener("DOMContentLoaded",() => {
    document.querySelectorAll(".head").forEach(div => {
        div.addEventListener("click",()=>{
            const file = div.dataset.file;

            // active クラスを全ての head から除去, 今クリックされたタブに active を付与
            document.querySelectorAll(".head").forEach(head => head.classList.remove("active"));
            div.classList.add("active");

            // header内(head tab_timer,head tab_stopwatch)click時にmain変更処理
            if(file){
                fetch(file).then(response => response.text())
                        .then(data => {document.querySelector(".main").innerHTML = data;
                                // JS読み込み
                                if (file === "timer.html") {
                                    const script = document.createElement("script");
                                    script.src = "../JS/timer.js";
                                    document.body.appendChild(script);
                                }            

                                if (file === "stopwatch.html") {
                                    const script = document.createElement("script");
                                    script.src = "../JS/stopwatch.js";
                                    document.body.appendChild(script);
                                }
                            })
                            .catch(error => {
                                console.log('読み込みエラー:', error);
                                document.querySelector('.main').innerHTML = "<p>読み込みに失敗しました。</p>";
                            });
            }
        });
    }); 

    // head tab_timerをmainに初期表示(tab_timerをクリック)させる
    const defTab = document.querySelector(".tab_timer");
    if(defTab){
        defTab.click();
    }
});
