import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import MoviePosters from '../Posters'
import propTypes from 'prop-types'

const Movies = (props) => {
  const allArt = MoviePosters;
  const movieCards = props.movies.map(movie => {
    const movieArt = allArt[`${movie.episodeId}`]
    return (
    <li key={movie.episodeId} className='li li--movie'>
      <MovieCard
        title={movie.title}
        episodeId={movie.episodeId}
        releaseDate={movie.releaseDate}
        characters={movie.characters}
        openingCrawl={movie.openingCrawl}
        poster={movieArt}/>
    </li>
    )
  });
  return (
    <section className='section section--movie-list'>
      <ul className='ul ul--movie-list'>
        {movieCards}
      </ul>
    </section>
  )
}


export default Movies;

Movies.propTypes = {
  movies: propTypes.array
}