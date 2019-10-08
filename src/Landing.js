import React, { Component } from 'react';



class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Landing</h1>
        <form>
          <input type='text' name='userName' />
          <input type='text' name='movieQuote' />          
        </form>
      </div>
    )
  }
}



export default Landing;