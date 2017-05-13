import React from 'react';
import ListArticlesContainer from './../app/containers/ListArticlesContainer';
import {shallow} from 'enzyme';
import moment from 'moment-timezone';

// Unix dates
const articles = [
  { title: 'Ichi is One', _id: '34578293745' },
  { title: 'Ni is Two', _id: '34524393535' },
  { title: 'San is Three', _id: '83768293745' },
];

describe('<ListArticlesContainer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ListArticlesContainer />);
  });

  it('renders all subcomponents', () => {
    component.setState({ articles: articles });
    expect(component.find('.article')).toHaveLength(3);
  });

  it('renders each subcomponent with correct title', () => {
    component.setState({ articles: articles });
    component.find('.article').forEach((node, index) => {
      expect(node.get(0).props.children.props).toHaveProperty('title', articles[index].title);
    });
  });

  it('renders each subcomponent with correct date', () => {
    component.setState({ articles: articles });
    component.find('.article').forEach((node, index) => {
      expect(node.get(0).props.children.props).toHaveProperty('id', articles[index]._id);
    });
  });
});
