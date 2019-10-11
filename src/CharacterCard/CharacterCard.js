import React from 'react';
import { Link } from 'react-router-dom'
import './CharacterCard.css';


const CharacterCard = ({ name, homeworld, homeworldPop, species, relatedFilms, isFavorite }) => {
  const films = relatedFilms.map(film => <li>{film}</li>)
  return (
    <div className='div div--character-card'>
      <h3 className='h3 h3--character-card'>{name}</h3>
      <ul>
        <p>Homeworld</p>
        <li>{homeworld}</li>
        <li>Population: {homeworldPop}</li>
        <p>Species</p>
        <li>{species}</li>
        <p>Appears in:</p>
        <li>{films}</li>
      </ul>  
    </div>
  )
}

export default CharacterCard;