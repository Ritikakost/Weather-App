import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q1mMLjgijhxITUKVdkkr5OEjs5U5JcOY9Q&s";
  const HOT_URL = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
  const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT518WjXYUmdiNjmvj9qzBK9tVxpo_dTkUN_g&s";
  const DEFAULT_URL = "https://via.placeholder.com/150";
 
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="weather illustration"
          height="140"
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : info.temp !== undefined
              ? COLD_URL
              : DEFAULT_URL
          }
        />
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <h2 style={{textAlign:"center"}}>{info.city}{
            info.humidity > 80
              ? <ThunderstormIcon/>
              : info.temp > 15
              ? <WbSunnyIcon/>
              : <AcUnitIcon/>
          }</h2>
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Min Temp: {info.tempMin}&deg;C</div>
            <div>Max Temp: {info.tempMax}&deg;C</div>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
