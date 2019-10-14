import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';
import propTypes from 'prop-types';

const MovieCard = ({ title, episodeId, releaseDate, characters, openingCrawl, poster }) => {
  
  return (
    <div className='div div--movie-card'>
      <h3 className='h3 h3--movie-card'>{title}</h3>
      <p>{episodeId} {releaseDate}</p>
      <img className='img img--poster' src={poster} alt='bang'/>
      <Link to='/characters'>
        <button data-characters={characters} data-crawl={openingCrawl}>Characters</button>
      </Link>
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