import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const EjectButton = ({ clearUserInfo }) => {
  return (
    <Link to='/'>
      <button className='button button--logout' onClick={clearUserInfo}>
        Eject
      </button>
    </Link>
  )
}


export default EjectButton;