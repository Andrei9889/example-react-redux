import React from 'react';
import {connect} from 'react-redux';

import {fetchWeather} from '../redux/actions';
import WeatherToday from '../components/Weather/WeatherToday';
import WeatherOther from '../components/Weather/WeatherOther';

class Weather extends React.Component{

  componentDidMount() {
    this.props.fetchWeather();
  }

  render(){
   
    const {isFetched} = this.props.weather

    if (!isFetched) return (<div>Загрузка...</div>);
    
    return (
      <React.Fragment>
        <WeatherToday />
        <WeatherOther />
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, {fetchWeather})(Weather);