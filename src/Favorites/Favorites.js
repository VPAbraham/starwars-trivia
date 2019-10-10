import React from 'react';
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
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>1
      </ul>
    </section>
  )
}

export default Favorites;