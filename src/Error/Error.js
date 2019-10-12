import React from 'react';
import './Error.css';

const Error = ({ msg, clearError }) => {
  return (
    <section className='section section--error-msg'>
      <h1>!WARNING</h1>
      <p>{msg}</p>
      <button className='button button--error' onClick={clearError}>Acknowledge</button>
    </section>
  )
}


export default Error;