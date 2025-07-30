console.log('connected,swich.js')

document.querySelectorAll(".header div").forEach(div => {div.addEventListener("click",()=>{
    const file = div.dataset.file;
    if(file){
        fetch(file).then(response => response.text())
        .then(data => {document.querySelector(".main").innerHTML = data;})
        .catch(error => {
            console.log('読み込みエラー:', error);
             document.querySelector('.main').innerHTML = "<p>読み込みに失敗しました。</p>";
        })
    }
})});