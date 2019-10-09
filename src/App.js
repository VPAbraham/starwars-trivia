import React, { Component } from 'react';
import Landing from './Landing.js';
import Favorites from './Favorites/Favorites'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
      favorites: [],
      userName: '',
      userQuote: '',
      userSkill: '',
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: false,
          movies: data.results
      })
    })
  }

  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className='App'>
        <div className='cockpit'>
          <Router>
            {/* <h2>App</h2> */}
            <Switch>
              <Route exact path='/'>
                <Landing updateUserInfo={this.updateUserInfo}/>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
