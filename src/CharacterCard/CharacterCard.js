import React from 'react';
import './CharacterCard.css';
import propTypes from 'prop-types'


const CharacterCard = ({ name, homeworld, species, relatedFilms, isFavorite }) => {
  const films = relatedFilms.map(film => <li>{film}</li>)
  return (
    <div className='div div--character-card'>
      <h3 className='h3 h3--character-card'>{name}</h3>
      <ul>
        <p className='p p--char-data'>Homeworld</p>
        <li>{homeworld[0]}</li>
        <li>Population: {homeworld[1]}</li>
        <p className='p p--char-data'>Species</p>
        <li>{species}</li>
        <p className='p p--char-data'>Appears in:</p>
        <li>{films}</li>
      </ul>  
    </div>
  )
}

export default CharacterCard;

CharacterCard.propTypes = {
  name: propTypes.string,
  homeworld: propTypes.string,
  homeworldPop: propTypes.number,
  species: propTypes.string,
  relatedFilms: propTypes.array,
  isFavorite: propTypes.string
}