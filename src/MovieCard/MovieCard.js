import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';


const MovieCard = ({ title, episodeId, releaseDate, characters, openingCrawl, updateMovieCharacters }) => {
  return (
    <div className='div div--movie-card'>
      <h3 className='h3 h3--movie-card'>{title}</h3>
      <p>{episodeId, releaseDate}</p>
      <Link to='/characters'>
        <button data-characters={characters} data-crawl={openingCrawl} onClick={event => updateMovieCharacters(characters, event)}>Characters</button>
      </Link>
    </div>
  )
}


export default MovieCard;