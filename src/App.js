import React, { Component } from 'react';
import { auth } from './firebase';
import HeaderApp from './Header';
import MainApp from './Main';
import './Assets/css/default.min.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.usersRef = null;
  this.userRef = null;
  this.state = {
    user: null
  };
}

componentDidMount() {
  auth.onAuthStateChanged((user) => {
    this.setState({user})
  })
}
  render() {
    return (
      <div>
        <HeaderApp user={this.state.user}/>
        <MainApp />
      </div>
    );
  }
}

export default App;
