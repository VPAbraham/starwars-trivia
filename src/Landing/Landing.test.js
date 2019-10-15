import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import { exportAllDeclaration } from '@babel/types';

describe('Landing', () => {
  let wrapper
  let updateUserInfo = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Landing
        updateUserInfo={updateUserInfo}
      />
    )    
  })
  
  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should call checkFormFields when handleChange is called', () => {
    wrapper.instance().checkFormFields = jest.fn();
    const mockEvent = { preventDefault() { }, target: { name: 'userName', value: 'Han' } };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.instance().checkFormFields).toHaveBeenCalled();
  });

  it('should save user\'s name to state', () => {
    const expected = 'Han';
    const mockEvent = { preventDefault() { }, target: { name: 'userName', value: 'Han' } };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('userName')).toEqual(expected);
  });

  it('should update the user\'s favorite quote in state', () => {
    const mockEvent = { preventDefault() { }, target: { name: 'userQuote', value: 'Luke, I am your father.' } };
    const expected = 'Luke, I am your father.';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('userQuote')).toEqual(expected);
  });

  it('should update the user\'s skill level in state', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: { name: 'skillLevel', value: 'Padawan' }
    };
    const expected = 'Padawan';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('skillLevel')).toEqual(expected);
  });
  
  it('should validate form fields when checkFormFields is called', () => {
    wrapper.setState({ userName: 'Chris', skillLevel: 'Master' })
    wrapper.instance().checkFormFields()
    expect(wrapper.state('formComplete')).toEqual(false)
    wrapper.setState({ userQuote: 'All Done' })
    wrapper.instance().checkFormFields()
    expect(wrapper.state('formComplete')).toEqual(true)
  });

  it('should call updateUserInfo when the submit button is clicked with a valid form', () => {
    const expected = { error: "", formComplete: true, skillLevel: "Master", userName: "Chris", userQuote: "Hi" }
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({ userName: 'Chris', userQuote: 'Hi', skillLevel: 'Master' })
    wrapper.instance().checkFormFields()
    wrapper.find('button').simulate('click', mockEvent)
    expect(updateUserInfo).toHaveBeenCalledWith(expected)
  });

  it('should update state when handleError is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleError(mockEvent);
    expect(wrapper.state('error')).toEqual('All Fields Required Padawan. You Must Focus!');
  });

  it('should clear error in state when clearError is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.find('button').simulate('click', mockEvent);  
    wrapper.instance().clearError(mockEvent);
    expect(wrapper.state('error')).toEqual('');
  })
})