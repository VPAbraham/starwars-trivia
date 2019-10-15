import React from 'react';
import './Crawl.css';

const Crawl = ({ crawl }) => {
  return (
    <div className='movie-crawl'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
          </div>
          <p>{crawl}</p>
        </div>
      </section>
    </div>  
  )
}


export default Error;