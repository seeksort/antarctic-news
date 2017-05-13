import React from 'react';
import Button from './../app/components/Button';
import {shallow} from 'enzyme';

describe('<Button />', () => {
  test('renders', () => {
    const component = shallow(<Button />);
    expect(component.hasClass('waves-effect')).toEqual(true);
  });

  test('inherits text', () => {
    const component = shallow(
      <Button text='This is a button.'></Button>
    );
    expect(component.text()).toEqual('This is a button.');
  });

  test('renders default color if no color prop', () => {
    const component = shallow(<Button />);
    expect(component.get(0).props.style).toHaveProperty('backgroundColor', '#1565c0');
  });

  test('renders color if passed as prop', () => {
    const testColor = '#495975'
    const component = shallow(<Button color={testColor} />);
    expect(component.get(0).props.style).toHaveProperty('backgroundColor', testColor);
  });
});
