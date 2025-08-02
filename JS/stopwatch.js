console.log('connected to stopwatch.js!')

const stopwatch = document.getElementById("stopwatch");

const startWatchBtn = document.querySelector(".start_stopwatch");
const stopWatchBtn = document.querySelector(".stop_stopwatch");
const resetWatchBtn = document.querySelector(".reset_stopwatch");

const boostBtn = document.querySelector(".boost");
const boostArea = document.querySelector(".boost_area");


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
    document.querySelectorAll(".btn_area .btn").forEach(b => b.classList.remove("active"));
    if (btn) {
        btn.classList.add("active");
    }
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

boostBtn.addEventListener("click",() => {
    console.log("clicked boost!!!");
    const areaOpen = boostArea.style.display === "flex";

    if (areaOpen) {
        // boostAreaがopenしているなら...
        boostArea.style.display = "none";
        boostBtn.classList.remove("active");
    } else {
        boostArea.style.display = "flex";
        boostBtn.classList.add("active");

        currentCategory = null;
        categoryBtn.forEach(b => b.classList.remove("active")); // activeを全て外す
        startSlideShow();
    }
});




///////////////////////////////////////////////////////
// boost //////////////////////////////////////////////
//////////////////////////////////////////////////////
const sentenceEl = document.querySelector(".sentence");
const nameEl = document.querySelector(".name");
const categoryBtn = document.querySelectorAll(".category");

const quotes = {
  people: [
    { sentence: "夢なき者に成功なし", name: "吉田松陰" },
    { sentence: "夢なき者に理想なし、\n理想なき者に計画なし、\n計画なき者に実行なし、\n実行なき者に成功なし、\n故に、夢なき者に成功なし。", name: "吉田松陰" },
    { sentence: "迷いはやる気の証拠", name: "高野鎮雄氏(日本ビクター元副社長)" },
    { sentence: "真剣だからこそ、ぶつかる壁がある", name: "松岡修造" },
    { sentence: "何も咲かない寒い日は、\n下へ下へと根を伸ばせ", name: "高橋尚子(女子マラソンの金メダリスト)" },
    { sentence: "君が諦めるときは、\n他の誰かが勝利するときだ", name: "コービー･ブライアント(NBA選手)" },
    { sentence: "壁というのはできる人にしかやってこない", name: "イチロー" },
    { sentence: "実行できてはじめて価値になる", name: "ラリー･ペイジ(Google創業者)" },
    { sentence: "偉大な成功は、失敗する自由から生まれる", name: "マーク･ザッカーバーグ(Facebook創業者)" },
    { sentence: "やる気を起こさせるには、\nとにもかくにも\n「やり始める」のがいちばんだ", name: "小林一三(作家)" },
    { sentence: "新しいことを勉強してると世の中は怖くありません、\n何もしないで、じっとしているから、怖くなるんです。", name: "" },
    { sentence: "今日できることを明日にのばすな", name: "フランクリン(政治家)" },
    { sentence: "考えは言葉となり、言葉は行動となり、\n行動は習慣となり、習慣は人格となり、\n人格は運命となる", name: "マーガレット・サッチャー(イギリスの首相)" },
    { sentence: "私は決して落ち込んだりしない,\nうまくいかない方法を一つ捨てるたびに、\nまた前進しているのだから", name: "" },
    { sentence: "落ち込むことも大切。 \nそうやって内省することで、\n人間は大きくなる", name: "坂田栄一郎(写真家)" },
    { sentence: "なりたかった自分になるのに\n遅すぎるということはない。", name: "ジョージ・エリオット(作家)" },
    { sentence: "失敗したからって何なのだ？\n失敗から学びを得て、\nまた挑戦すればいいじゃないか。", name: "ウォルト・ディズニー" },
    { sentence: "どんなに時間がかかっても、\nそんなの問題じゃない。\n大切なのは目標をもつこと。", name: "ユードラ・ウェルティ(作家)" },
    { sentence: "虹を見たければ、\nちょっとやそっとの雨は我慢しなくちゃ。", name: "ドリー・パートン(歌手)" },
    { sentence: "すべては練習のなかにある。", name: "ペレ(サッカー選手)" },
  ],
  book: [
    { sentence: "俺の敵はだいたい俺です。", name: "南波六太(宇宙兄弟)" },
    { sentence: "ちょっとだけ無理なことに挑戦してこーぜ", name: "南波六太(宇宙兄弟)" },
    { sentence: "道を選ぶということは、\nかならずしも歩きやすい安全な道をえらぶってことじゃないんだぞ", name: "ドラえもん(ドラえもん)" },
    { sentence: "大事なのは強いか弱いかではなくて、\n自分の力で立ち向かったって事ですよ", name: "(セキレイ)" },
    { sentence: "他人のために労を厭わない奴に\n人は付いていくものだ", name: "(銀の匙)" },
    { sentence: "意味のないことをたくさんするのが\n人生なんじゃよ", name: "友蔵(ちびまる子ちゃん)" },
    { sentence: "あの日悔しくて良かったって、\nいつか笑って言いたい", name: "(ちはやふる)" },
    { sentence: "不安は努力の勲章なんだ", name: "(ドラゴン桜)" },
    { sentence: "ところで平凡な俺よ。\n下を向いている暇はあるのか", name: "(ハイキュー!!)" },
    { sentence: "他人の世界をうらやんでいても仕方ない。\n自分の世界は自分で変えなければ", name: "(のだめカンタービレ)" },
    { sentence: "何とかなる。\nそれは、やることをちゃんとやってる人のセリフ", name: "(ムーミン)" },
    { sentence: "道草を楽しめ。大いにな", name: "(HUNTER × HUNTER)" },
    { sentence: "人間つまずくのは\n恥ずかしいことじゃない！\n立ち上がらない事が恥ずかしいんだぞ！", name: "両津勘吉(こちら葛飾区亀有公園前派出所)" },
    { sentence: "才能も発展も人生も、\nいざって時に退いたら終わりだ。", name: "ヨレンタ(チ。―地球の運動について―)" },
    { sentence: "前向きのバカならまだ可能性はあるが\n後ろ向きのカはバカは可能性すらゼロ…", name: "伊藤開司(カイジ)" },
    { sentence: "ただのピンチだ \n終わったわけじゃない、楽しんでこーぜ!", name: "木吉鉄平(黒子のバスケ)" },
    { sentence: "いちばんいけないのは\nじぶんなんかだめだと思いこむことだよ", name: "ドラえもん(ドラえもん)" },
    { sentence: "覚悟とは！\n暗闇の荒野に進むべき道を切り開くことだ!!", name: "ジョルノ(ジョジョの奇妙な物語-黄金の風-)" },
    { sentence: "悔しいと思うなら、まだ戦えるね", name: "鮎川龍二(ブルーピリオド)" },
    { sentence: "「そのうち」なんて当てにならないな。\nいまがその時さ。", name: "スナフキン(ムーミン)" },
  ]
};

let currentCategory = null;
let currentShow = 0;
let slideShowTimeID;


////////////////////////
function getAllQuotes() {
  return Object.values(quotes).flat();
}

function showContent(list, index){
    const quote = list[index];
    sentenceEl.innerHTML = quote.sentence.replace(/\n/g, "<br>");
    nameEl.textContent = quote.name;
}

function startSlideShow(category = null){
    clearTimeout(slideShowTimeID);
    
    const list = category ? quotes[category] : getAllQuotes();
    if (!list || list.length === 0) return;

    // random表示・// スライドショー表示間隔
    const showRandomQuote = () => {
        currentShow = Math.floor(Math.random() * list.length);
        showContent(list, currentShow);
        slideShowTimeID = setTimeout(showRandomQuote, 3000);
    };

    showRandomQuote();    
}
////////////////////////
categoryBtn.forEach(btn => {
    btn.addEventListener("click",() => {
        console.log("clicked categoryBtn");
        categoryBtn.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-type");
        currentCategory = category;
        startSlideShow(category);
    });
});

startSlideShow();
