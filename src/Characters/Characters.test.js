import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters', () => {
  let wrapper
  const addFavoriteCharacters = jest.fn()
  let characters = [{name: 'char1'}, {name: 'char2'}]
  beforeEach(() => {
    wrapper = shallow(
      <Characters
        characters={characters}
        addFav={addFavoriteCharacters}
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})