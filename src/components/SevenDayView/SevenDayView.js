import React, { Component } from 'react';
import './SevenDayView.css';

import WeatherCard from '../WeatherCard/WeatherCard'; 

class SevenDayView extends Component {

  render() {
    return (
      <div className="SevenDayView-div"> 
        {
            this.props.data.weather.map((e, id) => { 
                return <WeatherCard key={id} data={e}/>
            })    
        }          
      </div>
    );
  }
}

export default SevenDayView;
