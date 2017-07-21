import React, { Component } from 'react';

class NeedAuth extends Component {
  constructor(props) {
  super(props);
  this.state = {
      user: null
    }
  }

  componentDidUpdate(){
    if(this.props.user && !this.state.user) {
      this.setState({user: this.props.user})
    }
  }

  render() {
    return (
      <div>
        <h1>PLEASE SIGN IN TO RECORD YOUR GAME</h1>
      </div>
    );
  }
}

export default NeedAuth;
