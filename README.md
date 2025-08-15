# ⚪︎Timer & Stopwatch機能
<br>


## ⚪︎アプリケーション概要
タイマーとストップウォッチ機能を実装いたしました。
<br>


## ⚪︎開発のきっかけ
JavaScriptの理解を深めるため、個人的な実践練習として作成いたしました。<br>
制作にあたって、タイマーやストップウォッチについて自分なりに考えたところ、<br>
過去に友人が、勉強時間を記録するために、ストップウォッチアプリを活用していたことを思い出しました。<br>
そこで、単に時間を測るだけではなく、ふと疲れたとき・集中力が切れそうなときに、そっと背中を押すことができるような機能があれば素敵だなと思い、「ブーストモード」のオリジナル実装に至りました。<br>
モチベーションを高める「ブーストモード」の詳しい内容は、以下に記させていただきます。
<br>

## ⚪︎詳細
### ⚪︎機能一覧
<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タイマー機能</b></td>
    <!-- <td width="50%" align="center"><b></b></td> -->
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/77239507-bf55-4f3d-89dc-ba2d9fd5ee4f" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/1fb9be75-fdbc-4ac0-be73-da5b308df40c" width="100%"></td>
  </tr>
  <tr>
    <td width="50%">「START」「STOP」「RESET」ボタンがあり、タイマー設定後に操作が可能です。ボタンも直感的に使いやすいように工夫しております。</td>
    <td width="50%">タイマーの設定した時間になると、アラートでお知らせいたします。</td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>ストップウォッチ機能</b></td>
    <td width="50%" align="center"><b>ブーストモード</b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/05a35f3c-0e5a-4c8b-ae21-89b07f9924f1" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/898e4b30-7ee1-4bdd-b5b6-5e007797bacc" width="100%"></td>
  </tr>
  <tr>
    <td width="50%">「
      START」「STOP」「RESET」「BOOST(RESETボタンの下)」ボタンがあり、ストップウォッチに合わせて操作可能です。ボタンも直感的に使いやすいように工夫しております。
    </td>
    <td width="50%">
      「BOOST(RESETボタンの下)」ボタンをクリックすると、ブーストモードとして下部に偉人やキャラクターの名言がスライドショーとして表示されます。<br>
      さらに、枠内の「偉人(紳士アイコン)」「キャラクター(本アイコン)」ボタンをクリックすると、カテゴリー毎に名言が表示されます。<br>
      集中力が切れそうなときに、モチベーションアップとしてご活用ください。<br>
      例）<br>
      ・「偉人(紳士アイコン)」ボタン　→ 偉人の名言集。<br>
      ・「キャラクター(本アイコン)」ボタン　→　漫画の名言集。<br>
    </td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タイマー動作紹介</b></td>
    <td width="50%" align="center"><b>ストップウォッチ動作紹介</b></td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://gyazo.com/e5a871c59ed67d3f2ad580de40d4d0e8">
        <img src="https://i.gyazo.com/e5a871c59ed67d3f2ad580de40d4d0e8.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
    <td width="50%">
      <a href="https://gyazo.com/a1a12135bca036c545c5e8604c4b42a2">
        <img src="https://i.gyazo.com/a1a12135bca036c545c5e8604c4b42a2.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%"></td>
    <td width="50%"></td>
  </tr>
</table>
<br>


### ⚪︎工夫した点
<details>
<summary>１. ユーザビリティとデザインの工夫</summary>
- タイマーやストップウォッチの基本的な機能に加え、ユーザーが次にどのボタンを押すべきか視覚的、尚且つ直感的にわかるようにボタンの背景色のタイミング等工夫いたしました。
</details>

<details>
<summary>２. ブーストモード</summary>
- 「ブーストモード」には「ランダム(初期設定)」「偉人名言」「キャラクター名言」とカテゴリー分けされており、ユーザーの気分にあったものを選べるようにしております。<br>
- タイマーやストップウォッチの本来の機能を損なわせないために、「ブーストモード」ボタンは、あえて控えめなデザイン(カーソルを合わせると現れるデザイン)にしております。<br>
- しかし、「ブーストモード」ボタンは、1度選択したらモチベーションアップのため目立つようにデザインしております。
</details>
<br>

## ⚪︎Making of this app 
自身の学習メモとして見返せるように、制作時に気になったことをこちらに残しております。</summary>
<details>
  <summary>非同期処理による、画面の入れ替え</summary>
  - 「timer」「stopwatch」タブをそれぞれクリックすると、タブに対応したビューを<div class="main">箇所に表示させる。<br>
      
```html
　　//layout.html
    <div class="header">
        <button class="head tab_timer" data-file="timer.html" id="tabTimer">timer</button>
        <button class="head tab_stopwatch" data-file="stopwatch.html" id="tabStopWatch">stopwatch</button>
    </div>
    <div class="main">
      <!-- switch.jsにて"timer.html""stopwatch.html"を表示 -->
    </div>
```
<br>

```javascript
   //switch.js
   function loadPage(file, scriptPath){
      fetch(file)　　　　　　　　　　　　　　　　　　　　　　// fetch(※)でfileを受け取る
          .then(response => response.text())　　　　　　// 受け取ったfileをtextに変換
          .then(data => {
              document.querySelector(".main").innerHTML = data;　　// layout.htmlのmain内 = dataと定義
              
              if (file === "timer.html" && !scriptLoaded.timer) {　// もしfileが"timer.html"でscriptLoaded.timer=falseの場合、
                  const script = document.createElement("script"); // ↓
                  script.src = scriptPath;                         // ↓
                  script.id = "dynamic-script-timer";              // 各htmlのJSを対応させるため、「<script src="scriptPath" id="dynamic-script-timer"></script>」を作成
                  document.body.appendChild(script);               // body内に↑を格納
                  scriptLoaded.timer = true;                       // scriptLoaded.timer = true にする
              }
  
              if (file === "stopwatch.html" && !scriptLoaded.stopwatch) { // 以下省略
                  const script = document.createElement("script");
                  script.src = scriptPath;
                  script.id = "dynamic-script-stopwatch";
                  document.body.appendChild(script);
                  scriptLoaded.stopwatch = true;
              }
          })
          .catch(error => {
              console.log('読み込みエラー:', error);
              document.querySelector('.main').innerHTML = "<p>読み込みに失敗しました。</p>";
          });
    }
```
  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left"><b>fetch</b></td>
      <td width="80%" align="left">
        <b>HTTPリクエスト（API通信）を非同期で行うJavaScriptメソッド。<br>
          レスポンスそのもの（Response オブジェクト） を返すため、直接 HTML 文字列ではない。response.text() などで「中身」を取り出す必要がある。<br>
          イメージ: fetch() → 手紙をもらう / response.text() → 封筒を開けて中の手紙を読む 
        </b>
      </td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>catch</b></td>
      <td width="80%" align="left"><b>fetchでエラー(404など)が起きた場合の処理を記述。</b></td>
    </tr>
  </table>
</details>

<details>
  <summary>setInterval メソッド</summary>
  - 「start」ボタン等をそれぞれクリックすると、カウントダウンが行われる。<br>
      
```html
　　// timer.html
　　<div class="btn_area">
      <div class="btns">
        <button class="btn start active">START</button>
        <button class="btn stop">STOP</button>
      </div>
      <button class="btn reset">RESET</button>
  </div>
```
<br>

```javascript
   // timer.js
   startBtn.addEventListener("click",() => {
      console.log("start clicked!");
      setActiveBtn(stopBtn);
  
      let hours = Number(hoursInput.value);
      let minutes = Number(minutesInput.value);
      let seconds = Number(secondsInput.value);
  
      totalSec = hours * 3600 + minutes * 60 + seconds;
  
      if (totalSec > 0) {                 // totalSecが0より大きい場合...
          setActiveBtn(stopBtn);
          countDown();   　               // function countDownで定義した処理を行う
          
          if (!intervalID) {             // intervalIDが無い場合...
              intervalID = setInterval(countDown, 1000);   // 「1秒ごとにcountDown処理を繰り返す」= intervalIDと定義(※stopする時に必要)
          }
  
       } else {
          setActiveBtn(startBtn);
      }
      
  });
```
  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left"><b>setInterval()</b></td>
      <td width="80%" align="left">
        <b>setInterval メソッド<br>
          一定間隔ごとに繰り返し処理を実行する JavaScript メソッド。<br>
          「console.log(id); // 例えば 1, 2, 3 」のようなIDを返すためIDの定義を行う必要がある。（timer.js※部分）<br>
          setInterval(関数, ミリ秒);<br>
        　関数: 実行したい関数または処理（無名関数でもOK）/　ミリ秒: 実行する間隔（1000 = 1秒）<br>
          ！注意！<br>
          実行時間が長いと、処理が間に合わずズレが出ることも。時間の正確性が重要な場面では、setTimeout() をループさせる方法もある。
        </b>
      </td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>clearInterval()</b></td>
      <td width="80%" align="left"><b>setInterval()の繰り返し処理を停止させる。<br>setInterval()で定義したIDをclearInterval()に渡すと停止できる。</b></td>
    </tr>
  </table>
</details>

<details>
  <summary>setTimeout メソッド</summary>
  - 「start」ボタン等をそれぞれクリックすると、カウントダウンが行われる。<br>
      
```javascript
   // stopwatch.js
   function startSlideShow(category = null){　
      clearTimeout(slideShowTimeID);
      
      const list = category ? quotes[category] : getAllQuotes();　// categoryがあれば、quotesから[category]を取得。なければ全て取得。
      if (!list || list.length === 0) return;
  
      // random表示・// スライドショー表示間隔
      const showRandomQuote = () => { 
          currentShow = Math.floor(Math.random() * list.length); 　// (※１)
          showContent(list, currentShow);
          slideShowTimeID = setTimeout(showRandomQuote, 3500);    // (※2)
      };
  
      showRandomQuote();    
  }
```
  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left"><b>Math.random()</b></td>
      <td width="80%" align="left">
        <b>0〜1(未満)の乱数を生成する。<br>
          Math.random() * list.length（※１）の場合、「0〜1(未満)のランダムな数字」×「listの長さ」をcurrentShowとして定義している。
        </b>
      </td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>setTimeout()</b></td>
      <td width="80%" align="left"><b>一定時間後に1回だけ実行するを実行する。処理が終わってから次を実行するので 間隔が正確。<br>
        setTimeout(関数, ミリ秒);<br>
　      関数　: 実行したい関数または処理（無名関数でもOK）/ ミリ秒: 実行する間隔（1000 = 1秒）<br>
        setIntervalのように繰り返し実行したい場合は、※2のように工夫が必要。<br>
        setTimeout()で定義したIDをclearTime()に渡すと停止できる。</b></td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>clearTimeout()</b></td>
      <td width="80%" align="left"><b>setTimeout()の処理を停止させる。<br>setTimeout()で定義したIDをclearTimeout()に渡すと停止できる。</b></td>
    </tr>
  </table>
</details>
