import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Auth from './lib/Auth';
import './scss/style.scss';

class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount(){
    Axios
      .get('api/users', {
        headers: {
          'Authorization': 'Bearer ' + Auth.getToken()
        }
      })
    // .then(res => res.setState({ users: res.data }))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <section>
        <nav>
          <div className="title">
            <p>Hertford Chess Club</p>
          </div>
          <div className="links">
            <ul>
              <li>Learn</li>
              <li>Events</li>
              <li>Members</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <p>This is the main div</p>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
