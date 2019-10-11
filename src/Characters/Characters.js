import React from 'react';
// import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';



const Characters = (props) => {
  console.log(props)
  return (
<section className='section section--character-list'>

<div class="fade"></div>
<section class="star-wars-ep">
  <div class="crawl">
    <div class="title">
      <p>Episode IV</p>
      <h1>A New Hope</h1>
    </div>
    <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
      
      During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.

    Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….
    </p>
  </div>
</section>
    </section>
  )
}


export default Characters;