import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movie', () => {
  let wrapper, movieProps;
  beforeEach(() => {
    movieProps = {
      movies: []
    }
    wrapper = shallow(<Movies movieProps={movieProps} />)
  });
  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
});