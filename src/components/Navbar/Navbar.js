import React, { Component, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import { SignupButton } from './SignupButton/SignupButton'
import './Navbar.css'

class Navbar extends Component {
  state = {
    isClicked: false,
    isSticky: false,
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">STNDUP<i className="fas fa-angle-double-up"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.isClicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <i className={item.iconName} id={item.cName} href={item.url}></i>
                {/* <a className={item.cName} href={item.url}>
                  {item.title}
                </a> */}
              </li>
            )
          })}
        </ul>
        <SignupButton>
          <i className="fas fa-user-circle"></i>
        </SignupButton>
      </nav>
    )
  }
}

export default Navbar