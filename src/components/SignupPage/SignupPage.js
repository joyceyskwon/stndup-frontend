import React, { Component } from 'react'
import './SignupPage.css'
import signupPage1 from './signupPage1.jpg'
import signupPage2 from './signupPage2.jpg'

class SignupPage extends Component {
  render() {
    return (
      <div className="signup-page">
        <img src={signupPage1}></img>
      </div>
    )
  }
}

export default SignupPage