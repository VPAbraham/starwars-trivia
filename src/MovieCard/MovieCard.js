import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';
import moviePosters from '../Posters'


console.log(moviePosters)
const MovieCard = ({ title, episodeId, releaseDate, characters, openingCrawl }, moviePosters) => {
  
  return (
    <div className='div div--movie-card'>
      <h3 className='h3 h3--movie-card'>{title}</h3>
      <p>{episodeId} {releaseDate}</p>
      <img src={moviePosters[episodeId]} alt=''/>
      <Link to='/characters'>
        <button data-characters={characters} data-crawl={openingCrawl}>Characters</button>
      </Link>
    </div>
  )
}


export default MovieCard;