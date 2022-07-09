import { useState, useEffect } from 'react';
import DisplayWeather from './DisplayWeather';

export default function Dashboard() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
    });

    const APIKEY = "f7f195ec272f637410e9f39f3c110d6b";
    
    async function weatherData(e) {
        e.preventDefault();
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}&units=imperial`
        )
        .then((res) => res.json())
        .then((data) => data);

        setWeather({ data: data })
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name = "city") {
            setForm({ ...form, city: value })
        }
    };

    return(
        <div className="dashboard">
            <h1 className="headline">WEATHER</h1>
            <form className="form-container">
                <input 
                    type="text" 
                    className="input-container" 
                    placeholder="enter location" 
                    name="city"
                    onChange={(e) => handleChange(e)}>
                </input>
                <button type="submit" onClick={(e) => weatherData(e)} className="btn">?</button>
            </form>
            {weather.data != undefined ? (
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null }
        </div>
    )
}