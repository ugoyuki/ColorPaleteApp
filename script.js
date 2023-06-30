//カラーコードを何パターンか用意してどれがそれに該当するかを選ばせる
//正解したら何かを表示する
//カラーパレットの数値を取り出す

let color = document.getElementById("color");
let hexColor;
var timeout_id = null;
let processing = false;
const answer = document.getElementById("answer");
const lists = document.getElementById("lists").children;
const listsArray = Array.from(lists);//配列に変換

//0から3のランダムな値を生成
const getRandomNum = () => Math.floor((Math.random()*(3+1)));

initial();

//初期処理
function initial(){
    processing = false;
    answer.innerHTML = ``
    setColor();
}

function setColor(){
    listsArray.forEach((element) => {
        element.innerHTML = instantiateRandomColor();
        element.addEventListener("click", checkColor);
    });
    hexColor = listsArray[getRandomNum()].innerHTML;
    color.style.backgroundColor = hexColor;
}

function checkColor() {
    if(processing)return;
    const selectedColor = this.innerHTML;//押されたタグを取得
    if (selectedColor === hexColor) {
        answer.innerHTML = `正解です`
        processing = true;
        timeout_id =setTimeout(() => {
            initial();
          }, 1500);//3000ミリ秒(3秒後に初期化する)
    }
    else{
        answer.innerHTML = `不正解です`
    }
}

//#6桁のカラーコードを生成する
function instantiateRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

