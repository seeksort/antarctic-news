import React from 'react';
import { shallow } from 'enzyme';
import ArticleContainer from './../app/containers/ArticleContainer';

// Unix dates
const article = {
  title: 'Delicacies of Japan',
  _id: '34578293745',
  body: 'Sushi is not the only Japanese delicacy. Try soba, takoyaki, omurice, and bento!',
  create_date: 1246990224000,
  last_edit_date: 1493617416948,
};

describe('<ArticleContainer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ArticleContainer location={{ search: '34578293745' }} />);
    component.setState({
      title: article.title,
      body: article.body,
      create_date: article.create_date,
      last_edit_date: article.last_edit_date,
    });
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders edit component when button clicked', () => {
    component.find('#editButton').simulate('click');
    expect(component.find('EditArticleContainer')).toHaveLength(1);
  });
});
