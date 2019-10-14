import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import StarWarsLogo from '../images/StarWarsLogo.png';
import './Landing.css';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userQuote: '',
      skillLevel: '',
      formComplete: false,
      error: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    this.checkFormFields();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUserInfo(this.state); 
  }

  checkFormFields = () => {
    const keys = Object.keys(this.state);
    const userKeys = keys.filter(key => key.includes('user'));    
    const empty = userKeys.filter(key => this.state[key] === '');
    console.log(empty)
    return empty.length === 0 ? this.setState({ formComplete: true}) : this.setState({ formComplete: false});
  }

  handleError = (event) => {
    event.preventDefault()
    this.setState({ error: 'All Fields Required Padawan. You Must Focus!' });
  }

  clearError = (event) => {
    event.preventDefault();
    this.setState({ error: '' })
  }

  render() {
    return (
      <section className='section section--landing-form'>
        {/* <h1>StarWars</h1> */}
        <img className='img img--logo-main' src={StarWarsLogo} alt='star wars'/>
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
          {this.state.formComplete &&
            <button onClick={event => this.handleSubmit(event)}>
              <Link className='buttonLink' to='/movies'>
                Login
              </Link>
            </button>}
          {!this.state.formComplete &&
            <button onClick={event => this.handleError(event)}>
                Login</button>}
        </form>
        <footer className='footer footer--user-bar'>
        <p className='p p--user-info'>User Information Bar</p>
        </footer>
        {this.state.error && <Error msg={this.state.error} clearError={this.clearError}/>}
      </section>
    )
  }
}



export default Landing;