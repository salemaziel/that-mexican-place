import React from 'react';
import renderer from 'react-test-renderer';

import BizDetailsCard from '../src/component/BizDetailsCard.js';

describe('<BizDetailsCard />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<BizDetailsCard />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });