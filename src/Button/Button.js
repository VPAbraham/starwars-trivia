import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import propTypes from 'prop-types';


const Button = ({ method, path }) => {
  let passedMsg = path === '/' ? 'Eject' : 'Favorites';
  return (
    <Link to={`${path}`}>
      <button className='button button--logout' onClick={method}>
        {passedMsg}
      </button>
    </Link>
  )
}


export default Button;

Button.propTypes = {
  method: propTypes.func,
  path: propTypes.string
}