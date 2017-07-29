import React, { Component } from 'react';
import Summary from './Summary';
import Future from './Future';
import FontAwesome from 'react-fontawesome';
import Mailto from 'react-mailto'

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>
            <a href="https://github.com/projectmaking123">
              <FontAwesome name='github' />
            </a>
          </h1>
        </div>

        <div>
          <h1>
            <Mailto email='jasonw4dev@gmail.com'>
              <FontAwesome name='envelope' />
            </Mailto>
          </h1>
        </div>

        <Summary />
        <Future />

          <h1 className="titles">Projects</h1>
            <p>
              My final group project at DBC was a site designed to allow users to trade and barter with the skills that they have, rather than purchasing services to learn. My group consisted of 5 including myself. We used the following techology on the project.
            </p>
            <ul className="projectList">
              <li>Ruby on Rails</li>
              <li>JQuery/Ajax</li>
              <li>Bootstrap/CSS</li>
              <li>Deployed to Heroku</li>
            </ul>
            <div id="projects">
              <ul>
                <li style={{textAlign: 'center', fontSize: '40px', listStyle: 'none'}}>
                  <a href="https://tutor-skill.herokuapp.com">My final group project</a>
                </li>
              </ul>
            </div>

        <h1 id="home">Design With Intention</h1>
        <div>
          <h2 id="quote">
            "Very well, then I contradict myself, I am large, I contain multitudes."
          </h2>
          <div>
            <div id="author">
              - Walt Whitman
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
