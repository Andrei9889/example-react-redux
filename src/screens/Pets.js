import React from 'react';
import {connect} from 'react-redux';
import {fetchCurrency,fetchWeather} from '../redux/actions';

import Form from '../components/Pets/Form';
import Settings from '../components/Pets/Settings';
import PetsList from '../components/Pets/PetList';
import tempConversion from '../components/Weather/helpers/tempConversion';

class Pets extends React.Component{
    state = {
      arr: [{animal: 'Боня',person: 'Татьяна', date: '25.11.2016', time: '14:56', text: 'Британец черный'},
            {animal: 'Ася', person: 'Виктор', date: '04.05.2018', time: '12:47', text: 'Далмантинец пятнистый'},
            {animal: 'Кеша', person: 'Аня', date: '12.12.2018', time: '09:04', text: 'Попугай красный'},],
      animal: "",
      person: "",
      date: "",
      time: "",
      text: "",
      search: "",
      order: "",
    }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState( { [name]: value } ); 
  }

  handleSubmit = e => {
    e.preventDefault();
    const {animal, person, date, time, text, arr} = this.state;

    const pet = {
      animal,
      person,
      date,
      time,
      text,
    };

    const copyArr = [...arr];
    copyArr.push(pet);

    this.setState({ arr: copyArr, animal: "", person: "", date: "", time: "", text: ""});
  } 

  handleDelete = index => {
    const {arr} = this.state;
    const copyArr = [...arr];
    copyArr.splice(index, 1);
    this.setState({arr: copyArr});
  }

  componentDidMount() {
    this.props.fetchWeather();
    this.props.fetchCurrency();
  }

  render(){
    const {arr, animal, person, date, time, text, search, order} = this.state;
    const {currency, weather} = this.props;
    
    let copyArr = [...arr];

    if (search) {
      copyArr = copyArr.filter(pet => {
        return pet.animal.toLowerCase().includes(search.toLowerCase());
      });
    }
    
    if (order) {
      switch (order) {
        case "az":
          copyArr.sort((a, b) => {
            return (a.animal.toLowerCase() > b.animal.toLowerCase()) ? 1 : -1;
          });
          break;
        case "za":
          copyArr.sort((a, b) => {
            return (a.animal.toLowerCase() < b.animal.toLowerCase()) ? 1 : -1;
          });
          break;
      }
    }

    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-8 offset-1">
            <Form 
            animal={animal}
            person={person}
            date={date}
            time={time}
            text={text}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit} 
            />
            <Settings 
              search={search}
              order={order}
              handleInput={this.handleInput}
            />
            <PetsList 
              arr={copyArr}
              handleDelete={this.handleDelete}
            />
          </div>
          <div className="col-2 offset-1">
            <div className="card mb-2">
              <div className="card-body text-center">
                {weather.isFetched && ` ${tempConversion(weather.list[0].main.temp)} °C`}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h6>
                  1$ = {currency} BYN
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
};

const mapStateToProps = state => {
  return {
    currency: state.currency.currency,
    weather: state.weather
  }
}

export default connect(mapStateToProps, {fetchCurrency,fetchWeather})(Pets);

