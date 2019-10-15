import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {
  let wrapper
  const removeFavoriteCharacter = jest.fn()
  let characters = [{name: 'char1'}]
  beforeEach(() => {
    wrapper = shallow(
      <Favorites
        favorites={characters}
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})