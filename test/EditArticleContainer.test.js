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

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('updates the title', () => {
    component.instance().setState({ title: 'Journeys in Kyoto' });
    expect(component.instance().state.title).toBe('Journeys in Kyoto');
  });

  it('updates the body', () => {
    component.instance().setState({ title: 'Kyoto has historical temples, amazing bamboo groves, and opportunities to spot geisha!' });
    expect(component.instance().state.title).toBe('Kyoto has historical temples, amazing bamboo groves, and opportunities to spot geisha!');
  });
});
