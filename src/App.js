import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import { connect } from 'react-redux'
import { BrowserRouter as withRouter } from 'react-router-dom'
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
    fetch('http://localhost:3000/api/v1/users')
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

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: this.state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {})(App));
