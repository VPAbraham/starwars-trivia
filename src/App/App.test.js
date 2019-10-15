import React, { Component } from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update user when updateUserInfo is called', () => {
    const mockUser = { userName: 'Chris', userQuote: 'There is only do', skillLevel: 'Master' };
    wrapper.instance().updateUserInfo(mockUser);
    expect(wrapper.state('userName')).toEqual('Chris');
    expect(wrapper.state('userQuote')).toEqual('There is only do');
    expect(wrapper.state('userSkill')).toEqual('Master');
  });

  it('should clear user info when clearUserInfo is called', () => {
    wrapper.setState({ userName: 'Chris' })
    wrapper.instance().clearUserInfo()
    expect(wrapper.state('userName')).toEqual('');
  })

  it('should add a character to state when addFavCharacter is called', () => {
    const character = { name: 'Yoda', homeworld: 'Yoda Planet', isFavorite: true, relatedFilms: 'yes', species: 'Yoda Species' }
    wrapper.instance().addFavCharacter(character);
    expect(wrapper.state('favorites')).toEqual([character])
  });

  it('should delete characters when removeFavCharacter is called', () => {
    const character = { name: 'Yoda', homeworld: 'Yoda Planet', isFavorite: true, relatedFilms: 'yes', species: 'Yoda Species' }
    wrapper.setState({ favorites: [character] });
    wrapper.instance().removeFavCharacter(character);
    expect(wrapper.state('favorites')).toEqual([])
  })
})