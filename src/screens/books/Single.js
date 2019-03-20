import React from 'react';
import {connect} from 'react-redux';

import {deleteBook, addToFavorites} from '../../redux/actions'

class Single extends React.Component {

  handleDelete = () => {
    this.props.deleteBook(this.props.match.params.id);
    this.props.history.push('/books/list');
  }

  handleAddToFavorites = () => {
    let favoriteId = {};
    favoriteId[this.props.match.params.id] = true;
    
    this.props.addToFavorites(favoriteId);
  }

  renderBook(){
    const {title, price, id} = this.props.books.filter(book => book.id == this.props.match.params.id)[0];
    
    return (
      <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td><button onClick={this.handleDelete}  className="btn btn-primary">Удалить</button></td>
        <td><button onClick={this.handleAddToFavorites}  className="btn btn-primary">Добавить в избранное</button></td>
      </tr>
    )
  }
  
  render(){
    
    return (
        <table className="table table-bordered">
          <tbody>
            {this.renderBook()}
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    favorites: state.books.favorites,
  }
};

export default connect(mapStateToProps, {deleteBook, addToFavorites})(Single);
