import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movie', () => {
  const getCurrentMovieChars = jest.fn();
  it('should match snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
    <Movies
    movies={[]}
    getCurrentMovieChars={getCurrentMovieChars}
    />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should be able to set the currently selected movie\'s characters to state', () => {
    const wrapper = shallow(
    <Movies 
    movies={[]}
    getCurrentMovieChars={getCurrentMovieChars}
    />)
    const mockEvent = { preventDefault() { }, target: {name: 'currentCharacters', value: ['char1', 'char2', 'char3'] } };
    const expected = ['char1', 'char2', 'char3']

    wrapper.instance().getCurrentMovieChars(mockEvent, mockEvent)

    expect(wrapper.state('currentCharacters')).toEqual(expected)
  })
});