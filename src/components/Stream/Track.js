import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Divider } from 'semantic-ui-react';

class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired,
  };

  _play() {
    this.props.play(this.props.track);
  }

  render() {
    const { origin: { artwork_url, title } } = this.props.track;
    return (
      <div className="track">
        <Image src={artwork_url} size="tiny" verticalAlign="middle" />
        <span>{title}</span>
        <button onClick={() => this._play()} type="button">
          Play
        </button>
        <Divider />
      </div>
    );
  }
}

export default Track;
