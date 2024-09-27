

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
        console.log(response.currentConditions.conditions);
        console.log(response.currentConditions.temp);
        console.log(response.currentConditions.feelslike);
        console.log(response.currentConditions.humidity);
    });
}



