function rateStar() {
    let arr;
    arr = document.getElementsByClassName("star");
    for(let i=0; i<arr.length; i++) {
        let a=arr[i];
        a.innerHTML = "&#xf006;";
        setTimeout(function () {
            a.innerHTML = "&#xf123;";
        }, 1000);
        setTimeout(function () {
            a.innerHTML = "&#xf005;";
        }, 2000);
    }
}
rateStar();
setInterval(rateStar, 3000);

function showContent(){
    let content = document.getElementById("content");
    content.classList.remove("hidden");
    let button = document.getElementById("button");
    button.innerHTML = "Всім привіт!<br>Мені 20 років і я - студентка Львівського національного університету імені Івана Франка." +
        " За спеціальністю я - прикладний лінгвіст, і мені залишився ще рік, щоб закінчити бакалаврат :)" +
        " В майбутньому хочу верстати круті сайти!";
    button.classList.remove("italic-text","pointer");
}