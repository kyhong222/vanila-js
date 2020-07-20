

const COORDS = 'coords';
const API_KEYS = 'c92743f57433198fc78dab2bb8815f52';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng)
{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })


}


function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj))
}

function handleGeoSuccess(position)
{
    // const latitude = position.coord.latitude;
    // const longitude = position.coord.longitude;

    const coordsObj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError()
{
    console.log("cannot found geo");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null)
    {
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}

function init()
{
    loadCoords();
}
init();