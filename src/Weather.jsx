import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo"; 
import WeatherForecast from "./WeatherForecast"; 
import axios from "axios";
import "./Weather.css"; 

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity); 

    function handleResponse(response) {
        setWeatherData({
            ready: true,  
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity, 
            date: new Date(response.data.dt * 1000), 
            description: response.data.weather[0].description, 
            icon: response.data.weather[0].icon, 
            wind: response.data.wind.speed, 
            city: response.data.name,  
        }); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(); 
    }

    function handleCityChange(event) {
        setCity(event.target.value); 
    }

    function search() {
        const apikey = "2bd326a60dc89a53287e446e819664df"; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                                type="search" 
                                placeholder="Enter a city.." 
                                className="form-control" 
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input 
                                type="submit" 
                                value="Search" 
                                className="btn btn-primary w-100" 
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast />
            </div> 
        );
    } else {
        search(); 
        return "Loading..."; 
    }
}