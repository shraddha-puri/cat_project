let bulbImgEl = document.getElementById("bulbImg");
let catImgEl = document.getElementById("catImg");
let offBtnEl = document.getElementById("offBtn");
let onBtnEl = document.getElementById("onBtn");


function onOnbutton(){

    bulbImgEl.src ="on-bulb.jfif";
    catImgEl.src ="cat-img.jfif";

    offBtnEl.style.backgroundColor="grey";
    onBtnEl.style.backgroundColor="green";
}

function onOffbutton(){

    bulbImgEl.src ="off-bulb.jfif";
    catImgEl.src ="cat-eye.jfif";

    offBtnEl.style.backgroundColor = "red";
    onBtnEl.style.backgroundColor = "grey";

}












/*function onOnbutton(){

    document.getElementById("bulbImg").src ="on-bulb.jfif";
    document.getElementById("catImg").src ="cat-img.jfif";

    document.getElementById("offBtn").style.backgroundColor="grey";
    document.getElementById("onBtn").style.backgroundColor="green";
}

function onOffbutton(){

    document.getElementById("bulbImg").src ="off-bulb.jfif";
    document.getElementById("catImg").src ="cat-eye.jfif";

    document.getElementById("offBtn").style.backgroundColor = "red";
    document.getElementById("onBtn").style.backgroundColor = "grey";

}
*/