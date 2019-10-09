import React from 'react';
import './MovieCard.css';


const MovieCard = ({ title, episodeId, releaseDate, characters, openingCrawl }) => {
  return (
    <div className='div div--movie-card'>
      <h3 className='h3 h3--movie-card'>{title}</h3>
      <p>{episodeId, releaseDate}</p>
      <button data-characters={characters} data-crawl={openingCrawl}>Characters</button>
    </div>
  )
}


export default MovieCard;