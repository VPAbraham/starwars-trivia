import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ method, path, msg }) => {
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