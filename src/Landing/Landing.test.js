import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import { exportAllDeclaration } from '@babel/types';

describe('Landing', () => {
    const updateUserInfo = jest.fn();
    it('should match the snapshot', () => {
      const wrapper = shallow(
        <Landing updateUserInfo={updateUserInfo} />
      )
      expect(wrapper).toMatchSnapshot();
    });

    it('should save user\'s name to state', () => {
      const wrapper = shallow(<Landing />);
      const expected = 'Han';
      const mockEvent = { preventDefault() { }, target: {name: 'userName', value: 'Han'} };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('userName')).toEqual(expected);
    })

    it('should update the user\'s favorite quote in state', () => {
      const wrapper = shallow(<Landing />);
      const mockEvent = { preventDefault() { }, target: {name: 'userQuote', value: 'Luke, I am your father.'} };
      const expected = 'Luke, I am your father.';

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('userQuote')).toEqual(expected);
    })

    it('should update the user\'s skill level in state', () => {
      const wrapper = (<Landing />);
      const mockEvent = { preventDefault() { }, target: {name: 'skillLevel', value: 'Padawan'} };
      const expected = 'Padawan';

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('skillLevel')).toEqual(expected);
    })
})