import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userQuote: '',
      skillLevel: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, userQuote, skillLevel } = this.state;
    const keys = Object.keys(this.state);
    const empty = keys.filter(key => this.state[key] === '');
    return empty.length !== 0 ? this.handleError() : this.props.updateUserInfo(this.state);
  }

  handleError = () => {
    console.log('hi');
  }

  render() {
    return (
      <section>
        <h1>StarWars</h1>
        <h2>Nerd Trove</h2>
        <form>
          <label htmlFor='userName'>Enter your name Jedi</label>
          <input type='text' name='userName' onChange={this.handleChange} />
          <label htmlFor='movieQuote'>Enter your favorite Star Wars quote</label>
          <input type='text' name='userQuote' onChange={this.handleChange}/>
          <label htmlFor='skillLevel'>What is your strength in the force?</label>
          <select name='skillLevel'required onChange={this.handleChange}>
            <option value=''>Select your strength in the force...</option>
            <option value='padawan'>Padawan</option>
            <option value='jedi knight'>Jedi Knight</option>
            <option value='jedi master'>Jedi Master</option>
          </select>
          <button onClick={event => this.handleSubmit(event)}>Login</button>
        </form>
      </section>
    )
  }
}



export default Landing;