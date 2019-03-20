import React from 'react';
import moment from 'moment';

import tempConversion from '../helpers/tempConversion';

export default function WeatherItem(props){
  const {dt_txt,weather,main} = props.list;

  return (
    <React.Fragment>
      <div className="forecast__day clearfix">
        <div className="forecast__day__date">
          {moment(dt_txt).format('DD.MM.YYYY HH:mm')}
        </div>
        <div className="forecast__day__icon">
          <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather icon" />
        </div>
        <div className="forecast__day__temp">{tempConversion(main.temp)} °C</div>
      </div>
    </React.Fragment>
  );
}