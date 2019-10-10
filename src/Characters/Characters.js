import React from 'react';
// import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';



const Characters = (props) => {
  // const characterCards = props.characters.map(character => {
  //   return (<li key={character.episodeId} className='li li--character'>
  //     <CharacterCard />
  //   </li>)
  // });
  console.log(props)
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