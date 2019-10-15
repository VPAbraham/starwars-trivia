import React, { Component } from 'react';
import Loading from '../images/SWloadingIcon.gif';
import Characters from '../Characters/Characters';
import Favorites from '../Favorites/Favorites'
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import { getChars } from '../apiCalls'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      isLoading: true,
      movies: [],
      // characters: [],
      favorites: [],
      userName: '',
      userQuote: '',
      userSkill: '',
    }
  }

  componentDidMount() {
    // fetch('https://swapi.co/api/films/')
    //   .then(response => response.json())
    //   .then(data => {
    //     let dataSubset = [];
    //     const dataTrim = data.results.map(result => {
    //       const snippet = { title: result.title, episodeId: result.episode_id,
    //          releaseDate: result.release_date, characters: result.characters, 
    //          openingCrawl: result.opening_crawl };
    //       return dataSubset.push(snippet);
    //     });
          
    //     this.setState({
    //       isLoading: false,
    //       movies: dataSubset
    //     })
    //   })
    //   .catch(error => this.setState({ error: error.message, isLoading: false }))

  fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => {
        const { results } = data;
        const filmData = results.map(film => {
           const { characters, episode_id, opening_crawl, release_date, title } = film;
           return getChars(characters)
           .then(characters => ({ characters, episode_id, opening_crawl, release_date, title}))
        }
        )
        return Promise.all(filmData)
    })
    .then(data => this.setState({
      isLoading: false,
      movies: data
    }))
  }

  
  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  render() {
    console.log(this.state.movies[0]['characters'])
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
                {this.state.isLoading && 
                <div className='load-icon'>
                  <p>LOADING</p>
                  <img src={Loading} alt='loading' />
                </div>}
              </Route>
              <Route path='/favorites'>
                <Favorites favorites={this.state.favorites}/>
              </Route>
              <Route path='/characters'>
                <Characters characters/>
              </Route>
            </Switch>
          </Router>
        </div>
        <footer className='footer footer--user-info'>
          <p className='p p--user-name'>{this.state.userName}</p>
          <p className='p p--user-quote'>{this.state.userQuote}</p>
          <p className='p p--user-skill'>{this.state.userSkill}</p>          
        </footer>  
      </div>
    );
  }
}

export default App;
