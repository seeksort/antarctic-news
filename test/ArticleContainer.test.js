import React from 'react';
import { Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import ArticleContainer from './../app/containers/ArticleContainer';
import EditArticleContainer from './../app/containers/EditArticleContainer';

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

  it('renders the title', () => {
    expect(component.contains(<h3>Delicacies of Japan</h3>)).toBe(true);
  });

  it('renders the body', () => {
    expect(component.contains(<p style={{ whiteSpace: 'pre-wrap' }}>Sushi is not the only Japanese delicacy. Try
 soba, takoyaki, omurice, and bento!</p>)).toBe(true);
  });

  it('renders the original timestamp', () => {
    expect(component.contains(<h5>Original article date: 
      Tue, Jul 7, 2009 1:10 PM </h5>)).toBe(true);
  });

  it('renders the last update timestamp', () => {
    expect(component.contains(<h5>Last updated: 
      Mon, May 1, 2017 12:43 AM </h5>)).toBe(true);
  });

  it('renders back to articles button', () => {
    expect(component.contains(<Link
      className="waves-effect waves-light btn" replace={false} style={{ margin: '2px' }} to="/"
    >Back to Articles</Link>)).toBe(true);
  });
});
