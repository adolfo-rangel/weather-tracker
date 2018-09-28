import React, { Component } from 'react';

// Assets
import sunny from '../..//assets/noun_sunny.svg';
import rain from '../..//assets/noun_Rain.svg';
import cloud from '../..//assets/noun_Partially.svg';

import './WeatherCard.css';

class WeatherCard extends Component {

  weatherIcon = (weather) => { 
    switch(weather){ 
      case "Sunny":
        return <img src={sunny} alt="sunnyIcon" className="WeatherCard-icon"/>

      case "Rain":
        return <img src={rain} alt="sunnyIcon" className="WeatherCard-icon"/> 

      case "Clouds":
        return <img src={cloud} alt="sunnyIcon" className="WeatherCard-icon"/> 

      default:  
        return <p>{this.props.data.main}</p>
    }
  }

  render() { 
    return (
      <div className="WeatherCard-div"> 
          <h1>{this.props.data.day.substring(0, 3)}</h1>
          {this.weatherIcon(this.props.data.main)}
          <div className="WeatherCard-temp">
            <span className="WeatherCard-tempSelectedValue">{this.props.data.highTemp}°</span>
            <span className="WeatherCard-tempOtherValue">{this.props.data.lowTemp}°</span>
          </div>
      </div>
    );
  }
}

export default WeatherCard;
