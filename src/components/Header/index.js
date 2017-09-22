import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

const Logo = () => (
  <div>
    <Link to="/">
      <h1>SoundCloud</h1>
    </Link>
  </div>
);

const Login = ({ onLogin }) => <Link onClick={onLogin} to="/dashboard" />;
const Logout = ({ onLogout }) => <Link onClick={onLogout} to="/" />;

const SessionAction = ({ currentUser, onLogin, onLogOut }) => (
  <div>
    {currentUser ? (
      <Logout onLogout={onLogOut} />
    ) : (
      <Logout onLogin={onLogin} />
    )}
  </div>
);

const Header = ({ currentUser, onLogin, onLogout }) => (
  <div className="header">
    <div className="header-content">
      <Logo />
      <SessionAction
        currentUser={currentUser}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.session.user,
});

const mapDispatchToProps = dispatch => ({
  onLogin: bindActionCreators(actions.logInSCuser, dispatch),
  onLogOut: bindActionCreators(actions.logOutSCuser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
