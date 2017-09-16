import React, { Component } from 'react';

class Callback extends Component {
  componentDidMount() {
    /* eslint-disable */
    window.setTimeout(opener.SC.connectCallback, 1);
  }

  render() {
    return (
      <div>
        <p>This page should close soon.</p>
      </div>
    );
  }
}

export default Callback;
