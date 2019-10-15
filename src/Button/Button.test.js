import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper
  const clearUserInfo = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <Button
        method={clearUserInfo}
        path='/'
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should run clearUserInfo on click', () => {
    wrapper.find('button').simulate('click')
    expect(clearUserInfo).toHaveBeenCalled();
  });
})