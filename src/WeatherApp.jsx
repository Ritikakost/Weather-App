import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){

    const [weatherInfo,setweatherInfo]=useState({
        city:"Wonderland",
        feelslike:24.04,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:47,
        weather:"haze"
    });
    let updateInfo=(result)=>{
        setweatherInfo(result);
    }
    return (
        <div>
            <h2>Weather App by Ritika</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}