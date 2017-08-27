import React, { Component } from 'react';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';

class HeaderApp extends Component {
  render() {
    return (
      <header>
          <h1 id="welcome">Welcome {this.props.user && this.props.user.displayName}
            {!this.props.user && null}
          </h1>
          <div className='row'>
            <div className="main">
              <div className="button-row">
                <div className='col-xs-6 col-sm-3'>
                  <a href='/' title='Play Sudoku!' />
                </div>
                <div className='col-xs-6 col-sm-3'>
                  <a href='/forecast' title="Forecast" />
                </div>
                <div className='col-xs-6 col-sm-3'>
                  {
                    this.props.user
                    ?
                    <CurrentUser user={this.props.user} />
                    : <SignIn />
                  }
                </div>
              </div>
            </div>
          </div>

      </header>
    );
  }
}

export default HeaderApp;
