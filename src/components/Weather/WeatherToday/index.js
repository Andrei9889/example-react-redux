import React from 'react';
import {connect} from 'react-redux';

import windConversion from '../helpers/windConversion';
import tempConversion from '../helpers/tempConversion';
import './WeatherToday.css';

class WeatherToday extends React.Component{

  render(){
    const {city, country, list} = this.props.weather;
    const {weather, main, wind, dt_txt} = list[0];

    return (
      <section className="live-weather">
        <div>{city}, {country}</div>
        <div>{dt_txt.slice(11)}</div>
        <div className="live-weather__icon">
          <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather icon"/>
        </div>
        <h3 className="live-weather__description">{weather[0].main}</h3>
        <h1 className="live-weather__temp">{tempConversion(main.temp)} °C</h1>
        <div className="live-weather__wind clearfix">
          <span className="live-weather__wind__direction">{windConversion(wind.deg)}</span>
          <span className="live-weather__wind__speed">{wind.speed} m/s</span>
        </div>
    </section>     
    );
  }
}

const mapStateToProps = state => {
  
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherToday);