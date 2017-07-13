import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import './Assets/css/default.min.css';

class HeaderApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '	#008080'
    }

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
  }

  onMouseEnterHandler = () => {
       this.setState({
           color: '#00BFFF'
       });
   }

   onMouseLeaveHandler = () => {
       this.setState({
           color: '#008080'
       });
   }

  render() {
    return (
      <header
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        style={{backgroundColor: this.state.color}}
        >
        <h1>Welcome {this.props.user && this.props.user.displayName}
          {!this.props.user && null}
        </h1>
        <nav>
          <ul>
            <li className="first"><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/aboutme'>About Me</Link></li>
            <li className="last">  {
                this.props.user
                ? <div>
                    <CurrentUser user={this.props.user} />
                  </div>
              : <SignIn />
          }
        </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderApp;
