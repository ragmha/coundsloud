import Stream from './Stream';
import React from 'react';
import { shallow } from 'enzyme';

describe('Stream', () => {
  const props = {
    tracks: [
      {
        title: 'Nothing Lasts Forevers',
      },
      {
        title: 'Maera',
      },
    ],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream {...props} />);

    expect(element.find('.track')).toHaveLength(2);
  });
});
