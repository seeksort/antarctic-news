import React from 'react';
import { shallow } from 'enzyme';
import ListArticlesContainer from './../app/containers/ListArticlesContainer';

// Unix dates
const articles = [
  { title: 'Ichi is One', _id: '34578293745', last_edit_date: 1493617416948 },
  { title: 'Ni is Two', _id: '34524393535', last_edit_date: 1415364444948 },
  { title: 'San is Three', _id: '83768293745', last_edit_date: 1415361923948 },
];

describe('<ListArticlesContainer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ListArticlesContainer />);
    component.setState({ articles });
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders all subcomponents', () => {
    expect(component.find('.article')).toHaveLength(3);
  });
});
