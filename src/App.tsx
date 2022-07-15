import React from 'react';
import {useState, useEffect } from 'react';

import './App.css';

const APIkey = process.env.REACT_APP_NOT_SECRET_CODE;


console.log('api key: >>>>>', APIkey);




function App() {
  const [result, setResult] = useState();
  
  
  


  async function handleSubmit(): Function {
    let inputValue  = document.querySelector("#input").value;
    

    // 🏀api key not in!!!! 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=db2463a3751ca17d386c841c93af9e5b`;

    
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setResult(data);

 
}






  return (
    <div className="App">
      <h1>our weather map</h1>
      <input type='text' id="input"></input>
      <button onClick={handleSubmit}>Search City</button>
      <p id="result">{result? result.main.temp : 'no data'}</p>

    </div>
  );
}




export default App;
