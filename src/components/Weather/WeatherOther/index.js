import React from 'react';
import {connect} from 'react-redux';

import WeatherItem from '../WeatherItem';
import './WeatherOther.css';

class WeatherOther extends React.Component{

  render(){
    const {list} = this.props.weather
    let myList = list.filter(i => i.dt_txt.includes('15:00'));
  
    return (
      <section className="forecast">
        {myList.map((item,index) =>{
            return (
              <WeatherItem key={index} list={item}/>
            )
        })}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherOther);