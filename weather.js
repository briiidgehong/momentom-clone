//API : Application Programming Interface 
// 다른 서버로부터 손쉽게 "데이터"를 가져올 수 있는 수단.
const API_KEY = "26630e9386fab012f256ee8b5f0721cb";
const COORDS = 'coords';

const weather = document.querySelector(".js-weather");

function getWeather(lat, lon){
    //서버에서 데이터가 들어오길 기다린 후에,
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const tempertures = json.main.temp;
        const place = json.name;
        weather.innerText = `TEMP : ${tempertures} LOCATION : ${place}`;
    });

}

function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    //if(loadedCords === null){
        askForCoords();
    //}
}

function init(){
    loadCoords();
}

init();