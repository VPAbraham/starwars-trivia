import React, { Component } from 'react';
import Loading from '../images/SWloadingIcon.gif';
import Characters from '../Characters/Characters';
import Favorites from '../Favorites/Favorites'
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import Button from '../Button/Button';
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
    })
    .catch(error => this.setState({
      error: error.message,
      isLoading: false
    }))
  }

  getCurrentMovieChars = (characters, event) => {
    event.preventDefault();
    this.setState({currentCharacters: characters})
  }

  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  clearUserInfo = () => {
    this.setState({
      userName: '',
      userQuote: '',
      userSkill: ''
    })
  }

  addFavCharacter = ({name, homeworld, isFavorite, relatedFilms, species}) => {
    let character = { name, homeworld, isFavorite: true, relatedFilms, species }
    let duplicates = this.state.favorites.filter(char => char.name === name);
    return !duplicates.length ? this.setState({favorites: [...this.state.favorites, character]}) : null
  }

  removeFavCharacter = ({ name, homeworld, isFavorite, relatedFilms, species }) => {
    console.log(name) 
    let character = {name, homeworld, isFavorite: false, relatedFilms, species}
    let newFavs = this.state.favorites.filter(char => char.name !== name)
    this.setState({favorites: newFavs})
  } 

  render() {
    return (
      <div className='App'>
        <Router>
          <div className='cockpit'>
            <Switch>
              <Route exact path='/'>
                <Landing updateUserInfo={this.updateUserInfo} />
              </Route>
              <Route path='/movies'>
                {this.state.error && <h2 className='h2 h2--error'>{this.state.error}</h2>}
                <Movies movies={this.state.movies} getCurrentMovieChars={this.getCurrentMovieChars}/>
                {this.state.isLoading && 
                <div className='load-icon'>
                  <p>LOADING</p>
                  <img src={Loading} alt='loading' />
                </div>}
              </Route>
              <Route path='/favorites'>
                <Favorites
                  favorites={this.state.favorites}
                  addFav={this.addFavCharacter}
                  removeFav={this.removeFavCharacter} />
              </Route>
              <Route path='/characters'>
                <Characters
                  characters={this.state.currentCharacters}
                    addFav={this.addFavCharacter}
                  removeFav={this.removeFavCharacter} />
              </Route>
            </Switch>
          </div>
          <footer className='footer footer--user-info'>
            <p className='p p--user-name'>{this.state.userName}</p>
            <p className='p p--user-quote'>{this.state.userQuote}</p>
            <p className='p p--user-skill'>{this.state.userSkill}</p>
            <Button
              method={this.clearUserInfo}
              path='/'
              msg='Eject'
            />
            <Button
              method={null}
              path='/favorites'
              msg='Favs'
            />
          </footer>  
        </Router>
      </div>
    );
  }
}

export default App;
