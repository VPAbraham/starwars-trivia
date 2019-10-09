import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';



const Movies = (props) => {
  const movieCards = props.movies.map(movie => {
    return (<li className='li li--movie'>
      <MovieCard
        key={movie.episodeId}
        title={movie.title}
        episodeId={movie.episodeId}
        releaseDate={movie.releaseDate}
        characters={movie.characters}
        openingCrawl={movie.openingCrawl}
      />
    </li>)  
  })
  return (
    <section className='section section--movie-list'>
      <ul className='ul ul--movie-list'>
        {movieCards}
      </ul>  
    </section>
  )
}



export default Movies;