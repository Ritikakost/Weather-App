import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setcity] = useState("");
  const [error, seterror] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8ac0007be687216f34be38aba0c2847b";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      
      let result = {
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
        city: jsonresponse.name,
      };
      
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    seterror(false); // Reset error state
    try {
      setcity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
