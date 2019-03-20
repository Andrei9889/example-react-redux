import React from 'react';
import {connect} from 'react-redux';

import {createBook} from '../../redux/actions'

class Form extends React.Component {
  state = {
    title: '',
    price: '',
    autor: '',
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {title, price, autor} = this.state;
    const book = {
      title,
      price,
      autor,
    };
    this.props.createBook(book);
    this.props.history.push('/books/list')
  }

  render(){
    const {title, price} = this.state;
    const autors = this.props.autors;

    return (
      <form className="form-inline my-2" onSubmit={this.handleSubmit}>
        <input className="form-control mr-2" type="text" name="title" placeholder="Название" value={title} onChange={this.handleChange}/>
        <input className="form-control mr-2" type="number" name="price" placeholder="Цена" value={price} onChange={this.handleChange}/>
        <select className="form-control mr-2" name='autor' onChange={this.handleChange}>
          <option key="0">-</option>
        {autors.map((autor,i) => {
          return (
            <option key={i+1} value={autor}>{autor}</option>
          )
          })}
        </select>
        <button className="btn btn-primary">Добавить</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    autors: state.books.autors,
  }
};

export default connect(mapStateToProps, {createBook})(Form);



