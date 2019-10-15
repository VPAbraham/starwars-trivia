import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';
import propTypes from 'prop-types';

const MovieCard = ({ title, episodeId, releaseDate, characters, openingCrawl, poster, getCurrentMovieChars }) => {
  
  return (
    <div className='div div--movie-card'>
      <h3 className='h3 h3--movie-card'>{title}</h3>
      <p className='p p--movie-episode'>Episode {episodeId}</p>
      <p className='p p--movie-release'>{releaseDate}</p>
      <img className='img img--poster' src={poster} alt='bang'/>
      <button className='button button--movie-characters' onClick={event => getCurrentMovieChars(characters, event)} data-crawl={openingCrawl}>
        <Link to='/characters'>
          Characters
        </Link>
      </button>
    </div>
  )
}


export default MovieCard;

MovieCard.propTypes = {
  title: propTypes.string ,
  episodeId: propTypes.number ,
  releaseDate: propTypes.string ,
  characters: propTypes.array ,
  openingCrawl: propTypes.string ,
  poster: propTypes.string 
}