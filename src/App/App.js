import React, { Component } from 'react';
import Loading from '../images/SWloadingIcon.gif';
import CharactersData from '../sample-data/characters';
import Favorites from '../Favorites/Favorites'
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import { getChars, getUrlData } from '../apiCalls'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      isLoading: true,
      movies: [],
      characters: [],
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
          const snippet = { title: result.title, episodeId: result.episode_id,
             releaseDate: result.release_date, characters: result.characters, 
             openingCrawl: result.opening_crawl }
          return dataSubset.push(snippet);
        })
        this.setState({
          isLoading: false,
          movies: dataSubset
        }
        )
      })
      .catch(error => this.setState({ error: error.message, isLoading: false }))

  fetch('https://swapi.co/api/films/')
    .then(response => response.json())
      .then(data => {
      this.setState({
        isLoading: true
      })  
      let sortedResults = data.results.sort((a, b) => 
        a.episode_id - b.episode_id);
      
      let castLists = sortedResults.map(data => {
        return data.characters
      });

      let chars = castLists.map(charUrls =>
        getChars(charUrls)
        )
      this.setState({
        characters: chars,
        isLoading: false
      });  
    });

    // fetch('https://swapi.co/api/films/')
    //   .then(response => response.json())
    //   .then(data => console.log('API chain', data))
  }

  
  updateUserInfo = (userInfo) => {
    const { userName, userQuote, skillLevel } = userInfo;
    this.setState({ userName, userQuote, userSkill: skillLevel });
  }

  render() {
    console.log(this.state)
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
                {!this.state.isLoading && <Characters characters={this.state.characters}/>}
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
