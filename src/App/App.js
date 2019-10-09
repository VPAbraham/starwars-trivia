import React, { Component } from 'react';
import Loading from '../images/SWloadingIcon.gif';
import Favorites from '../Favorites/Favorites'
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
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
        let dataSubset = []
        const dataTrim = data.results.map(result => {
          const snippet = { title: result.title, episodeId: result.episode_id, releaseDate: result.release_date, characters: result.characters, openingCrawl: result.opening_crawl }
          return dataSubset.push(snippet);
        })
        this.setState({
          isLoading: false,
          movies: dataSubset
        }
        )
      })
      .catch(error => this.setState({ error: error.message, isLoading: false }))
  }

  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  render() {
    return (
      <div className='App'>
        <div className='cockpit'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Landing updateUserInfo={this.updateUserInfo} />
              </Route>
              <Route path='/movies'>
                {this.state.error && <h2>{this.state.error}</h2>}
                <Movies movies={this.state.movies} />
                {this.state.isLoading && <img src={Loading} alt='loading' />}
              </Route>
              <Route path='/favorites'>
                <Favorites favorites={this.state.favorites}/>
              </Route>
              <Route>

              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
