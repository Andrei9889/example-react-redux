import React from 'react';
import {connect} from 'react-redux';

import {removeFromFavorites} from '../../redux/actions'

class Favorites extends React.Component {

  handleDeleteFav = (id) => {
    this.props.removeFromFavorites(id);
    this.props.history.push('/books/favorites');
  }

  render(){

    let books = this.props.books;
    let favoritesId = Object.keys(this.props.favorites);
    let favoritesBooks = [];
    
    favoritesId.forEach(item => {
      books.forEach(book=>{
        if(book.id == item){
          favoritesBooks.push(book);
        }
      })
    });

    
    return (
      <table className="table table-bordered">
        <tbody>
          {favoritesBooks.map(book => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.autor}</td>
                <td><button onClick={() => this.handleDeleteFav(book.id)} className="btn btn-primary">Удалить из избранного</button></td>
              </tr>)
            }
          )}
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

export default connect(mapStateToProps, {removeFromFavorites})(Favorites);