import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';
import { MenuItem } from 'react-bootstrap';


class SignIn extends Component {
  render() {
    return (
      <a
        title="Sign In"
        onClick={() => auth.signInWithPopup(googleAuthProvider)}>
      </a>
    );
  }
}

export default SignIn;
