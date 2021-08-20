
import React, {useState} from 'react';

// my key: 33b1ba5876d98dff6c671ca5f92f5c5a
//icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
//req: http://api.openweathermap.org/data/2.5/weather?q=الرياض&appid=33b1ba5876d98dff6c671ca5f92f5c5a&units=metric&lang=ar
const weatherApi={
  key : "33b1ba5876d98dff6c671ca5f92f5c5a",
  baseUrl : "http://api.openweathermap.org/data/2.5/weather"
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
  const [query, setQuery] =useSta
  let today = new Date().toDateString();
  return (
    <div className="App" style={{
      backgroundImage: "url(https://tse4.mm.bing.net/th?id=OIP.1ZmgpC4nlY142KyUB_OSegHaEK&pid=Api)"}}
>
     <main>
       <div className="search-box">
         <input
         type="text"
         className="search-bar"
         placeholder="Search ..."
         />
       </div>
       <div className="location-box">
         <div className="location">Riyadh, KSA</div>
         <div className="date">{today}</div>
       </div>
       <div className="weather-box">
         <div className="temp">36c</div>
         <div className="weather">Sunny</div>
       </div>
     </main>
    </div>
  );
}

export default App;
