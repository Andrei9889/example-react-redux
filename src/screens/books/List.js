import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {like, dislike} from '../../redux/actions'

class List extends React.Component {

  handleLike = (id) => {
    this.props.like(id);
  }

  handleDislike = (id) => {
    this.props.dislike(id);
  }

  render(){

    const {books} = this.props;

    return (
      <table className="table table-bordered">
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.autor}</td>
                <td><Link to ={`/books/books/${book.id}`}>Посмотреть</Link></td>
                <td width="7%"><button onClick={()=>this.handleLike(book.id)} className="btn btn-success">Like {book.like}</button></td>
                <td width="7%"><button onClick={()=>this.handleDislike(book.id)} className="btn btn-danger">Disike {book.dislike}</button></td>
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
  }
};

export default connect(mapStateToProps, {like, dislike})(List);