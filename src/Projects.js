import React, { Component } from 'react';
import Sudoku from './Sudoku'

class Projects extends Component {
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
        <div>
          <Sudoku user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default Projects;

// <h1 className="titles">Projects</h1>
//   <div className="projectList">
//   <p>
//     My final group project at DBC was a site designed to allow users to trade and barter
//     with the skills that they have, rather than purchasing services to learn. My group consisted
//     of 5 including myself. We used the following techology on the project.
//   </p>
//   <ul className="projectList">
//     <li>Ruby on Rails</li>
//     <li>JQuery/Ajax</li>
//     <li>Bootstrap/CSS</li>
//     <li>Deployed to Heroku</li>
//   </ul>
//   </div>
//   <div id="projects">
//     <ul>
//       <li>
//         <a href="https://tutor-skill.herokuapp.com">My final group project</a>
//       </li>
//     </ul>
//   </div>
//   <div>
//     <p style={{
//         height: '100px',
//         fontSize: '40px'
//     }}>
//       One of my own projects is a rails api back end that solves Sudoku puzzles
//       as well as generates puzzles. Take a look below.
//     </p>
//   </div>
