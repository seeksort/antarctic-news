import React from 'react';
import { shallow } from 'enzyme';
import EditArticleContainer from './../app/containers/EditArticleContainer';

// Unix dates
const article = {
  title: 'Getting Around Tokyo',
  _id: '93850782434',
  body: 'Tokyo is a city made for pedestrians, drivers, bicyclists, and train commuters!',
};

describe('<EditArticleContainer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EditArticleContainer
      articleId={{ id: article._id }}
      title={article.title}
      body={article.body}
      action="edit"
    />);
  });

  it('receives title prop', () => {
    expect(component.instance().props.title).toBe('Getting Around Tokyo');
  });

  it('receives body prop', () => {
    expect(component.instance().props.body).toBe('Tokyo is a city made for pedestrians, drivers, bicyclists, and train commuters!');
  });
});
