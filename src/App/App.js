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
      currentCharacters: [],
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
        const { results } = data;
        const filmData = results.map(film => {
           const { characters, episode_id, opening_crawl, release_date, title } = film;
           return getChars(characters)
           .then(characters => ({ characters, episode_id, opening_crawl, release_date, title}))
        })
      return Promise.all(filmData)
    })
    .then(data => {
      const characters = data.map(film => {
        return ({
          episodeId: film.episode_id,
          characters: film.characters
        })
      })
      this.setState({
        isLoading: false,
        movies: data,
      })
    .catch(error => console.error(error))  
    })
  }

  getCurrentMovieChars = (characters, event) => {
    event.preventDefault();
    this.setState({currentCharacters: characters})
  }

  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  addFavCharacter = ({name, homeworld, isFavorite, relatedFilms, species}) => {
    let character = {name, homeworld, isFavorite: true, relatedFilms, species}
    return !this.state.favorites.includes(character) ? this.setState({favorites: [...this.state.favorites, character]}) : null
  }

  removeFavCharacter = (character) => {
    let newFavs = this.state.filter(char => !character)
    // character.isFavorite = false;
    this.setState({favorites: newFavs})
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
                <Movies movies={this.state.movies} getCurrentMovieChars={this.getCurrentMovieChars}/>
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
                <Characters
                  characters={this.state.currentCharacters}
                  addFav={this.addFavCharacter}
                  removeFav={this.removeFavCharacter} />
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
