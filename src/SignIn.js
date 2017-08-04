import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <a
        title="Sign In With Google"
        onClick={() => auth.signInWithPopup(googleAuthProvider)}>
      </a>
    );
  }
}

export default SignIn;
