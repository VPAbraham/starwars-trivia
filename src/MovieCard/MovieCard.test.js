import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper
  const getCurrentMovieChars = jest.fn()
  let movie = [{
    title: 'StarWars',
    episodeId: 2,
    releaseDate: 'Yesterday',
    characters: [{ name: 'John' }],
    openingCrawl: 'crawling',
    poster: 'img1',
  }]
  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        movie={movie}
        getCurrentMovieChars={getCurrentMovieChars}
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call getCurrentMovieChars when button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(getCurrentMovieChars).toHaveBeenCalled()
  })
})