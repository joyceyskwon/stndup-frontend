import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import SignupPage from './components/SignupPage/SignupPage'
import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
  }

  componentDidMount() {
    this.fetchCurrentUser()
  }



  fetchCurrentUser = () => {
    fetch('http://localhost:3000/')
      .then(r => r.json())
      .then(users => {
        console.log(users, '<= This is the current user')
        this.setState({
          currentUser: users[0]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage
          currentUser={this.state.currentUser}
        />
        {/* { this.state.currentUser ?
          <Homepage 
            currentUser={this.state.currentUser}
          />
         :
          <SignupPage />
        } */}
      </div>
    );
  }
}

export default App;
