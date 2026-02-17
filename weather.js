const apiKey = "38838330439041009c840415261702";

function getWeather() {
    const city = document.getElementById("cityInput").value || "London";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.location.name;
            document.getElementById("temp").innerText = data.current.temp_c + " °C";
            document.getElementById("condition").innerText = data.current.condition.text;
            document.getElementById("humidity").innerText = data.current.humidity + "%";
            document.getElementById("wind").innerText = data.current.wind_kph + " km/h";
            document.getElementById("icon").src = "https:" + data.current.condition.icon;
        })
        .catch(() => {
            alert("City not found!");
        });
}

// Load default city
getWeather();