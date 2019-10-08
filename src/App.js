import React, { Component } from 'react';
import Landing from './Landing';
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
          movies: data
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <h2>App</h2>
          <Switch>
            <Route exact path='/' component={Landing}>
              <Landing />
            </Route>
          </Switch>
        </Router>  
      </div>
    );
  }
}

export default App;
