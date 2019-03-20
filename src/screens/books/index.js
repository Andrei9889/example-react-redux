import React from 'react';
import {Route , NavLink} from 'react-router-dom';

import Form from './Form'
import List from './List'
import Single from './Single'
import Favorites from './Favorites'

class Books extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary border-top border-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink activeClassName='active' className="nav-link" to="/books/list">Каталог</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/books/add">Добавить книгу</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" to="/books/favorites">Избранное</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        <Route exact path='/books/list'            component={List} />
        <Route       path='/books/add'             component={Form} />
        <Route       path='/books/books/:id'       component={Single} />
        <Route       path='/books/favorites'       component={Favorites} />
        </div>
      </div>
    );
  }
}

export default Books;