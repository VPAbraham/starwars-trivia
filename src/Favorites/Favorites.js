import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Favorites.css';
import propTypes from 'prop-types'



const Favorites = (props) => {
  const favoriteCards = props.favorites.length ? props.favorites.map(favorite => {
    return ((<li key={favorite.name} className='li li--character'>
      <CharacterCard
        name={favorite.name}
        homeworld={favorite.homeworld}
        species={favorite.species}
        relatedFilms={favorite.relatedFilms}
        isFavorite={false}
        method={props.removeFav}
      />
    </li>) 
    )
  }) : <p>You have no favorite characters yet!</p>
  return (
    <section className='section--character-list'>
      <header className='header--favorites'>Favorites</header>
      <ul className='ul ul--character-list'>
        {favoriteCards}
      </ul>
    </section>
  )
}

export default Favorites;

Favorites.propTypes = {
  favorites: propTypes.array
}