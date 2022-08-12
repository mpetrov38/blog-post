import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './weatherFetch.css'

function WeatherFetch(){
    const key = "6085abccb64b095bbab763aae42e7114";
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');


    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Burgas&appid=6085abccb64b095bbab763aae42e7114')
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            setFeelsLike(Math.round(data.main.feels_like- 273.15));
            setMainTemp(Math.round(data.main.temp-273.15));
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIconID(data.weather[0].icon);
        })
    },[]);
    return(
        <div className="weather-wapper">
        <h1>Main Temperature: {mainTemp} Degrees Celsius</h1>
        <h1>Feels Like: {feels_like} Degrees Celsius</h1>
        <h1>Weather Parameter: {main}</h1>
        <h1>Description : {description}</h1>
        <img src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}/>
        <Link className="weather-btn" to="/">Home</Link>
        </div>

)
}

export default WeatherFetch;