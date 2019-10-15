import React from 'react';
import './CharacterCard.css';
import favorite from '../images/lightsaber.png';
import notFav from '../images/lightsaber-disabled.png';
import propTypes from 'prop-types';


const CharacterCard = (props) => {
  const { name, homeworld, species, relatedFilms, isFavorite } = props
  const films = relatedFilms.map(film => <li className='li li--char-films'>{film}</li>)
  const favIcon = !isFavorite ? notFav : favorite;
  return (
    <div className='div div--character-card'>
      <h3 className='h3 h3--character-card'><img className='img--fav-icon' src={favIcon} onClick={event => props.method({ name, homeworld, species, relatedFilms, isFavorite })}/>{name}</h3>
      <ul>
        <p className='p p--char-data'>Homeworld</p>
        <li>{homeworld[0]}</li>
        <li>Population: {homeworld[1]}</li>
        <p className='p p--char-data'>Species</p>
        <li>{species}</li>
        <p className='p p--char-data'>Appears in:</p>
        <ul>{films}</ul>
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
  isFavorite: propTypes.bool
}