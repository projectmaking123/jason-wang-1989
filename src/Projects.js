import React, { Component, PropTypes } from 'react';
import Sudoku from './Sudoku'

class Projects extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <h1 className="titles">Projects</h1>
        <p>
          My final group project at DBC was a site designed to allow users to trade and barter
          with the skills that they have, rather than purchasing services to learn. My group consisted
          of 5 including myself. We used the following techology on the project.
          <ul>
            <li>Ruby on Rails</li>
            <li>JQuery/Ajax</li>
            <li>Bootstrap/CSS</li>
            <li>Deployed to Heroku</li>
          </ul>
        </p>
        <div id="projects">
          <ul>
            <li>
              <a href="https://tutor-skill.herokuapp.com">My final group project</a>
            </li>
          </ul>
        </div>
        <div>
          <p style={{height: '100px'}}>
            One of my own projects is a rails api back end that solves Sudoku puzzles
            as well as generates puzzles. Take a look below.
          </p>
        </div>
            <Sudoku />
          <div>
            <p id='thanks'>
                Thank you for taking the time to visit my site.
                Written in Firebase/React/Bootstrap/Sass
            </p>
          </div>
      </div>
    );
  }
}

export default Projects;
