import React from 'react';
import './Movies.css';



const Movies = (props) => {
  const movieCards = props.map(movie => {
    <li>
      <MovieCard
        title={movie.title}
        episodeID={movie.episodeId}
        releaseDate={movie.releaseDate}
        characters={movie.characters}
        openingCrawl={movie.openingCrawl}
      />
    </li>  
  })
  return (
    <section>
      <ul>
        {movieCards}
      </ul>  
    </section>
  )
}



export default Movies;