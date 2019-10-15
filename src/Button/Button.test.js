import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const clearUserInfo = jest.fn()
  it('should match the snapshot', () => {

    const wrapper = (
      <Button clearUserInfo={clearUserInfo}/>
    )

    expect(wrapper).toMatchSnapshot()
  })
})