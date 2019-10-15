import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard'


describe('CharacterCard', () => {
  let wrapper
  const addFav = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<CharacterCard
      name='Chris'
      homeworld={['Earth', 7000000000]}
      species='Human'
      relatedFilms={['Yup', 'Yuppers']}
      isFavorite={true}
      method={addFav}
    />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should run addFav on click', () => {
    wrapper.find('img').simulate('click')
    expect(addFav).toHaveBeenCalled();
  });
})