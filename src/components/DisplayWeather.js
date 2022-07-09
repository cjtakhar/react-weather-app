import React from "react";

export default function DisplayWeather(props) {
    const { data } = props;
    const iconurl = "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
    return(
        <div className="weather-display">
            
            <div className="weather-div">
                <h2 className="city-name">
                    {data.name}
                </h2>
                <h2>
                    {" "}
                    {Math.floor(data.main.temp)}
                </h2>
                <h2 className="weather-main">{data.weather[0].main}</h2>
                    <img className="weather-icon" src={iconurl} />
                <h2 className="weather-description">
                    {" "}
                    {data.weather[0].description}
                </h2>
            </div>
        
            <div className="weatherdetails">
                <div className="section1">
                <h4>High/Low</h4>
                    <span>
                      {Math.floor(data.main.temp_max)}/
                      {Math.floor(data.main.temp_min)}
                    </span>
                <h4>Humidity</h4>
                <span>{data.main.humidity} %</span>
                <h4>Pressure</h4>
                <span>{data.main.pressure} hPa</span>
                <h4>Visibility</h4>
                <span>{data.visibility / 1000} mi</span>
                </div>
            </div>
            
            <div className="section2">
                <h4>Wind</h4>
                <span>{Math.floor((data.wind.speed))} mph/hr</span>
                <h4>Wind Direction</h4>
                <span>
                    {data.wind.deg}
                    <sup>o</sup> deg
                </span>
                <h4>Sunrise</h4>
                <span>
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
                <h4>Sunset</h4>
                <span>
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </span>
            </div>
          
        </div>
    )
}