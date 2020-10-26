//greeting 인사
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
    // querySelector : css 방식으로 모든것을 다 가지고 온다. -> 하나만 return
    // querySelectorAll : array return

const USER_LS = "currentUser"; //local storage
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
//이벤트의 default 후에, 새로고침됨 그걸 막아야됨
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// local Storage , js 의 정보들을 로컬에 저장시켜놓을 수 있다.
// f12 -> application -> storage -> local storage
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //null이면, input form 을 통해 값을 입력받자
        askForName();
    } else {
        // 사용자가 있으면, input form remove and display text
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();    
}

init();