import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';
import propTypes from 'prop-types';



const Characters = (props) => {
  const characterCards = props.characters.map(character => {
    return (<li key={character.name} className='li li--character'>
      <CharacterCard
        name={character.name}
        homeworld={character.homeworld}
        homeworldPop={character.homeworld.population || 3}
        species={character.species}
        relatedFilms={character.films}
        isFavorite={false}
        addFav={props.addFav}
        removeFav={props.removeFav}
      />
    </li>)
  });
  return (

<section className='section section--character-list'>
  <ul className='ul ul--character-list'>
    {characterCards}
    </ul>
  <div className='movie-crawl'>  
    <div className="fade"></div>
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p>Episode IV</p>
          <h1>A New Hope</h1>
        </div>
        <p>It is a period of civil war. <br />Rebel spaceships, striking from a hidden base, <br />have won their first victory against the evil Galactic Empire.</p>
        <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
        <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>
      </div>
    </section>
  </div>  
</section>
  )
}


export default Characters;

Characters.propTypes = {
  characters: propTypes.array
}