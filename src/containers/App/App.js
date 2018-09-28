import React, { Component } from 'react';
import './App.css';

// Dummy data
import dummydata from "../../data/dummy"; 

// Components
import Forecast from '../Forecast/Forecast'; 

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Container">
          <h1 className="App-title"> 7 Day Weather Forecast</h1>
          <Forecast data={dummydata} /> 
        </div>
      </div>
    );
  }
}

export default App;
