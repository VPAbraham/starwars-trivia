import React, { Component } from 'react';
import './Landing.css';


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
          <label for='userName'>Enter your name Jedi</label>
          <input type='text' name='userName' />
          <label for='movieQuote'>Enter your favorite Star Wars quote</label>
          <input type='text' name='movieQuote' />
          <label for='skillLevel'>What is your strength in the force?</label>
          <select name='skillLevel'required>
            <option value=''>Select your strength in the force...</option>
            <option value='padawan'>Padawan</option>
            <option value='jedi knight'>Jedi Knight</option>
            <option value='jedi master'>Jedi Master</option>
          </select>
          <button>Login</button>
        </form>
      </section>
    )
  }
}



export default Landing;