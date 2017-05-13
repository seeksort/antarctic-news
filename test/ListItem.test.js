import React from 'react';
import ListItem from './../app/components/ListItem';
import {shallow} from 'enzyme';

describe('<ListItem />', () => {
  test('renders the component', () => {
    const component = shallow(
      <ListItem
        title='List Title'
        date='May 13, 2017'
      />
    );
    expect(component.hasClass('article')).toEqual(true);
  });
});
