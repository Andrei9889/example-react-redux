import React, { Component } from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';

import Pets from            './screens/Pets';
import Weather from         './screens/Weather';
import Youtube from         './screens/youtube';
import YoutubePlayer from   './screens/youtube/YoutubePlayer';
import Books from           './screens/books/';
import Memes from           './screens/Memes';
import Login from           './screens/chat/Login';
import Chat from            './screens/chat/Chat';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeClassName='active'  className="nav-link" to='/pets'>Animal recording</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active'  className="nav-link" to='/weather'>Weather widget</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName='active' className="nav-link" to='/youtube'>Search videos on YouTube</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active'  className="nav-link" to='/books'>library of books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active'  className="nav-link" to='/memes'>Memes generator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active'  className="nav-link" to='/chat/login'>Chat online</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Route   exact path="/"                  render={() => (<Redirect to="/weather" />)} />
          <Route         path='/pets'              component={Pets} />
          <Route         path='/weather'           component={Weather} />
          <Route   exact path="/books"             render={() => (<Redirect to="/books/list" />)} />
          <Route         path='/books'             component={Books} />
          <Route         path='/memes'             component={Memes} />
          <Switch>
            <Route exact path='/youtube'           component={Youtube}/>
            <Route       path='/youtube/:videoId'  component={YoutubePlayer}/>
          </Switch>
            <Route       path='/chat/login'        component={Login}/>
            <Route       path='/chat/online'       component={Chat}/>
        </div>
      </div>
    );
  }
}

export default App;
