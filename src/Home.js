import React, { Component } from 'react';
import Summary from './Summary';
import Future from './Future';
import FontAwesome from 'react-fontawesome';
import Mailto from 'react-mailto'

class Home extends Component {

  render() {
    return (
      <div className="row">
        <div>
            <h1 id="home">Design With Intention</h1>
          <div className="col-6 links">
            <a href="https://github.com/projectmaking123">
              <FontAwesome name='github' />
            </a>
          </div>
        </div>

        <div className="col-6 links">
            <Mailto email='jasonw4dev@gmail.com'>
              <FontAwesome name='envelope' />
            </Mailto>
        </div>
      </div>
    );
  }
}

export default Home;

// <h1 className="titles">Projects</h1>
//   <p>
//     My final group project at DBC was a site designed to allow users to trade and barter with the skills that they have, rather than purchasing services to learn. My group consisted of 5 including myself. We used the following techology on the project.
//   </p>
//   <ul className="projectList">
//     <li>Ruby on Rails</li>
//     <li>JQuery/Ajax</li>
//     <li>Bootstrap/CSS</li>
//     <li>Deployed to Heroku</li>
//   </ul>
//   <div id="projects">
//     <ul>
//       <li style={{textAlign: 'center', fontSize: '40px', listStyle: 'none'}}>
//         <a href="https://tutor-skill.herokuapp.com">Skill-Up</a>
//       </li>
//     </ul>
//   </div>
