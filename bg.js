const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoad(){
    console.log("finished loading");
}
function paintImage(imgNumber){
    const img = new Image();
    img.src = `images/${imgNumber}.jpg`
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();