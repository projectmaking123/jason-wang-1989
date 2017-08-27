import React, { Component } from 'react';
import { auth } from './firebase';
import HeaderApp from './Header';
import MainApp from './Main';
import './Assets/css/default.min.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
      currentUser: null,
      puzzles: null,
      currentConditions: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});
    });
  }

  render() {
    return (
      <div className="img-fluid app-background dark-overlay">
        <HeaderApp user={this.state.currentUser} />
        <MainApp user={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
