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
<details>　
  <summary> 学習メモとしてこちらに保管しております。</summary>
  <details>
    <summary>１. ユーザビリティとデザインの工夫</summary>
    - タイマーやストップウォッチの基本的な機能に加え、ユーザーが次にどのボタンを押すべきか視覚的、尚且つ直感的にわかるようにボタンの背景色のタイミング等工夫いたしました。
  </details>
</details>
