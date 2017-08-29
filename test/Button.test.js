import React from 'react';
import { shallow } from 'enzyme';
import Button from './../app/components/Button';

describe('<Button />', () => { 
  it('renders correctly', () => {
    const component = shallow(<Button onClick={() => ''} />);
    expect(component).toMatchSnapshot();
  });

  it('inherits text', () => {
    const component = shallow(
      <Button text="This is a button." onClick={() => ''} />
    );
    expect(component.text()).toEqual('This is a button.');
  });

  it('renders default color if no color prop', () => {
    const component = shallow(<Button onClick={() => ''} />);
    expect(component.get(0).props.style).toHaveProperty('backgroundColor', '#1565c0');
  });

  it('renders color if passed as prop', () => {
    const testColor = '#495975';
    const component = shallow(<Button color={testColor} onClick={() => ''} />);
    expect(component.get(0).props.style).toHaveProperty('backgroundColor', testColor);
  });
});
