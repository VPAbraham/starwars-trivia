import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites'


describe('Favorites', () => {
  let wrapper, favProps;
  beforeEach(() => {
    favProps = {
      favorites: []
    }

    wrapper = shallow(<Favorites favProps = {favProps} />)
  });
  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
});