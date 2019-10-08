import React, { Component } from 'react';



class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h1>StarWars</h1>
        <h2>Nerd Trove</h2>
        <form>
          <input type='text' name='userName' />
          <input type='text' name='movieQuote' />
          <select required>
            <option value='' selected>Select your strength in the force...</option>
            <option value='padawan'>Padawan</option>
            <option value='jedi knight'>Jedi Knight</option>
            <option value='jedi master'>Jedi Master</option>
          </select>
        </form>
      </section>
    )
  }
}



export default Landing;