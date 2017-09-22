import { connect } from 'react-redux';
import Stream from './Stream';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

/* returns a substate of the global state */
function mapStateToProps(state) {
  const { user, session } = state.auth;
  const { tracks, activeTrack } = state.track;
  return {
    user,
    session,
    tracks,
    activeTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogIn: bindActionCreators(actions.logInSCuser, dispatch),
    onLogOut: bindActionCreators(actions.logOutSCuser, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
