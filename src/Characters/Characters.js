import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';



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
      />
    </li>)
  });
  return (
    <section className='section section--character-list'>
      <p>HIHIHIHIHIH</p>
      <ul className='ul ul--character-list'>
        {/* {characterCards} */}
      </ul>
    </section>
  )
}


export default Characters;