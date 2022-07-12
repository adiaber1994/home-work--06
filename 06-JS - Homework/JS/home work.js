let title = document.getElementById('title');

function backgroundColor(color) {
    title.style.backgroundColor = color;
}
backgroundColor("grey");

let num = 0;
let elem = document.getElementById("num")

function pluseNum(){
    num++;
    if (num > 5) num = 0;
    elem.innerHTML = num;
}

function minusNum(){
    num--;
    if (num < 0) num = 5
    elem.innerHTML = num
}







