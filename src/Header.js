import React, { Component } from 'react';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';

class HeaderApp extends Component {
  render() {
    return (
      <header>
        <div className="main">
          <h1 id="welcome">Welcome {this.props.user && this.props.user.displayName}
            {!this.props.user && null}
          </h1>
          <div className="button-row">
            <div>
              <a href='/' title='Home'>
                </a>
              </div>
            <div>
              <a href='/projects' title="Play Sudoku!">Play Sudoku!</a>
            </div>
            <div>
                  {
                    this.props.user
                    ?
                    <CurrentUser user={this.props.user} />
                    : <SignIn />
                  }
                </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderApp;
