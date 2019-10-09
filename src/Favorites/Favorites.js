import React, { Component } from 'react';
import './Favorites.css'


const Favorites = (props) => {
  const characterCards = props.favorites.map(favorite => {
    return (
      <p>{favorite}</p>
      // <CharacterCard />//will hold off on this until we have character cards built out.
    )
  })
  return (
    <section className='section--favorites'>
      <header className='header--favorites'>Favorites</header>
      <div className='div--favorites'>
        {characterCards}
      </div>
    </section>
  )
}

export default Favorites;