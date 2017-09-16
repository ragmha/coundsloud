import { connect } from 'react-redux';
import Stream from './Stream';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

/* returns a substate of the global state */
function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.authSCuser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
