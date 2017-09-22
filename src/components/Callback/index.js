import React, { Component } from 'react';

const delay = 1;

class Callback extends Component {
  componentDidMount() {
    /* eslint-disable */
    window.setTimeout(opener.SC.connectCallback, delay);
  }

  render() {
    return (
      <div>
        <p>This page should close soon...</p>
      </div>
    );
  }
}

export default Callback;
