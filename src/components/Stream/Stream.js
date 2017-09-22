/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, Image, Icon } from 'semantic-ui-react';
import Track from './Track';
import { CLIENT_ID } from '../../constants/auth';

class Stream extends Component {
  static propTypes = {
    tracks: PropTypes.array,
    user: PropTypes.object,
    clientId: PropTypes.string,
    auth: PropTypes.func,
    play: PropTypes.func,
  };

  state = { activeItem: 'home' };

  componentDidUpdate() {
    const player = this.player;
    const { activeTrack } = this.props;

    if (player) {
      if (activeTrack) {
        player.play();
      } else {
        player.pause();
      }
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const {
      user,
      activeTrack,
      tracks = [],
      onLogIn,
      onLogOut,
      onPlay,
    } = this.props;

    return (
      <div>
        <Menu inverted>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            {user ? (
              <Menu.Item
                name="logout"
                active={activeItem === 'logout'}
                onClick={onLogOut}
              />
            ) : (
              <Menu.Item
                name="login"
                active={activeItem === 'login'}
                onClick={onLogIn}
              />
            )}
          </Menu.Menu>
        </Menu>

        {user ? (
          <Segment>
            <div>
              <Header as="h2" textAlign="center">
                <Image shape="circular" src={user.avatar_url} />
                <br />
                {user.username}
              </Header>

              <div>
                <div id="tracks">
                  {tracks.map((track, key) => (
                    <Track key={key} track={track} play={onPlay} />
                  ))}
                </div>
                <div id="track">
                  {activeTrack ? (
                    <audio
                      id="player"
                      ref={player => {
                        this.player = player;
                      }}
                      src={`${activeTrack.origin
                        .stream_url}?client_id=${CLIENT_ID}`}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </Segment>
        ) : (
          <Header as="h1" icon textAlign="center">
            <Icon name="cloud" circular />
            Hear what’s trending for free in the SoundCloud community
          </Header>
        )}
      </div>
    );
  }
}

export default Stream;
