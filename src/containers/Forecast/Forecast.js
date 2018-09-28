import React, { Component } from 'react';
import './Forecast.css';

// Components
import SevenDayView from '../../components/SevenDayView/SevenDayView'; 

class Forecast extends Component {
  render() {
    return (
      <div> 
        <SevenDayView data={this.props.data}/> 
      </div>
    );
  }
}

export default Forecast;
