let lon;
let lat;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon")
const kelvin = 273.15;




window.addEventListener("load",() => {
    if(navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition ((position) => {
                    
                    lon = position.coords.longitude;
                    lat = position.coords.latitude;

                    //id API

                    url_base = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ac30c94f19fb119d6ecea98bf03c6deb';

                    fetch(url_base)
                    .then ((response) => {

                            return response.json();

                        }) 

                        .then ((data) => {

                                console.log("ESTA ES LA DATA")
                                console.log(data);

                                temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C - ";
                                summary.textContent = data.weather[0].description + " - ";
                                loc.textContent = data.name + ", " + data.sys.country;

                            });

                }); 
    };
        




















})