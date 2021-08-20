
import React, {useState, useEffect} from 'react';

// my key: 33b1ba5876d98dff6c671ca5f92f5c5a
//icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
//req: http://api.openweathermap.org/data/2.5/weather?q=الرياض&appid=33b1ba5876d98dff6c671ca5f92f5c5a&units=metric&lang=ar
const weatherApi={
  key : "b74c7e0f6d39c491740220eff483faa7",
  baseUrl : "http://api.openweathermap.org/data/2.5/weather",
}

// fot image api

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://bing-image-search1.p.rapidapi.com/images/search',
//   params: {q: '<REQUIRED>'},
//   headers: {
//     'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
//     'x-rapidapi-key': '5c518b29ebmshcf349ff9f44df5dp126a5fjsna03a7c573f90'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//res.value[1].thumbnailUrl


function App() {
  const axios = require('axios');

  const [query, setQuery] =useState('');
  const [weather, setWeather] = useState({});
  const [description, setDescription] =useState('');
  const [img, setImg] = useState('');
  const [timezone, setTimezone] =useState(' day')
  var icon;

  const search = event =>{
    if(event.key ==="Enter"){
      axios.get(`${weatherApi.baseUrl}?q=${query}&appid=${weatherApi.key}&units=metric`)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log("name"+response.data.name);
        setWeather(response.data);
        setDescription(response.data.weather[0].description)
        icon=response.data.weather[0].icon; 
        console.log("icon "+ icon[2])
        setTimezone(icon[2] === 'd' ?" afternoon" : " night")
        setQuery('');
        console.log(typeof weather.main)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });


  
    }
  }

  useEffect(() => {
    const axios = require('axios');
    const options = {
      method: 'GET',
      url: 'https://bing-image-search1.p.rapidapi.com/images/search',
      params: {q: description+ timezone},
      headers: {
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
        'x-rapidapi-key': '5c518b29ebmshcf349ff9f44df5dp126a5fjsna03a7c573f90'
      }
    };
    
 axios.request(options).then(function (response) {
	console.log(response.data);
  setImg(response.data.value[1].thumbnailUrl)
}).catch(function (error) {
	console.error(error);
});
  }, [ timezone]);

  let today = new Date().toDateString();
  return (
    <div className="App" style={{
      backgroundImage: `url(${img})`}}
>
     <main>
       <div className="search-box">
         <input
         type="text"
         className="search-bar"
         placeholder="Search ..."
         onChange= {e => setQuery(e.target.value)}
         value={query}
         onKeyPress={search}
         />
       </div>
       {(typeof(weather.main) != "undefined" )? (
         <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{today}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}c</div>
              {/* <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"/> */}
              <div className="weather">{weather.weather[0].description}</div>
            </div>
         </div>
       ):('')}
      
     </main>
    </div>
  );
}

export default App;
