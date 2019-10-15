import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  let wrapper
  const getCurrentMovieChars = jest.fn()
  let movies = [{title: 'StarWars'}]
  beforeEach(() => {
    wrapper = shallow(
      <Movies
        movies={movies}
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})