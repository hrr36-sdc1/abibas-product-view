import React from 'react';
import { shallow } from 'enzyme';

import Main from '../client/src/Components/main';
import Images from '../client/src/Components/product-view/images';
import InfoSection from '../client/src/Components/Product-info/info';

describe('Main Component', () => {
  const component = shallow(<Main />);
  it('should render images', () => {
    expect(component.find(Images)).toHaveLength(1);
  });
  it('should render info section', () => {
    expect(component.find(InfoSection)).toHaveLength(1);
  });
});
