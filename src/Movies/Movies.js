import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import MoviePosters from '../Posters'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Movies = (props) => {
  const allArt = MoviePosters;
  const movieCards = props.movies.map(movie => {
    const movieArt = allArt[`${movie.episode_id}`]
    return (
    <li key={movie.episodeId} className='li li--movie'>
      <MovieCard
        title={movie.title}
        episodeId={movie.episode_id}
        releaseDate={movie.release_date}
        characters={movie.characters}
        openingCrawl={movie.opening_crawl}
        poster={movieArt}
        getCurrentMovieChars={props.getCurrentMovieChars}
      />
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