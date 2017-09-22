import Stream from './Stream';
import React from 'react';
import { shallow } from 'enzyme';

describe('Stream', () => {
  const props = {
    tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).toHaveLength(2);
  });
});
