import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';



const Characters = (props) => {
  const characterCards = props.characters.map(character => {
    return (<li key={character.episodeId} className='li li--character'>
      <CharacterCard/>
    </li>)
  });
  return (
    <section className='section section--character-list'>
      <ul className='ul ul--character-list'>
        {characterCards}
      </ul>
    </section>
  )
}


export default Characters;