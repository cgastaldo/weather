

function returnUserWeather(){
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function(){
        let userLocation = document.getElementById('userLocation').value;
        fetchWeatherInformation(userLocation);
    })
}

returnUserWeather();

function fetchWeatherInformation(userLocation){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=SP2Z8DKKWVNAG73BV922TKTVD`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        conditions = response.currentConditions.conditions;
        temp = response.currentConditions.temp;
        feelsLike = response.currentConditions.feelslike;
        humidity = response.currentConditions.humidity;
        setWeatherConditions(temp, humidity, feelsLike, conditions, userLocation);
    });
}


function setWeatherConditions(temp, humidity, feelsLike, conditions, userLocation){
    let setTemp = document.getElementById('temp');
    let setHumidity = document.getElementById('humidity');
    let setFeelsLike = document.getElementById('feelsLike');
    let setConditions = document.getElementById('conditions');

    setTemp.textContent = temp + "F";
    setHumidity.textContent = humidity + "%";
    setFeelsLike.textContent = feelsLike + "F";
    setConditions.textContent = conditions + " in " + userLocation;
}

