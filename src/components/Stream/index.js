import { connect } from 'react-redux';
import Stream from './Stream';

/* returns a substate of the global state */
function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks,
  };
}

export default connect(mapStateToProps)(Stream);
