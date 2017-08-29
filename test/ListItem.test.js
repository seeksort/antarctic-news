import { shallow } from 'enzyme';
import React from 'react';
import ListItem from './../app/components/ListItem';

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ListItem
        title="List Title"
        date="May 13, 2017"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
