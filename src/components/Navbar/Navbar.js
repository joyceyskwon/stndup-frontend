import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { SignupButton } from './SignupButton/SignupButton'
import { Searchbar } from './Searchbar/Searchbar'
import './Navbar.css'

class Navbar extends Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">STNDUP<i className="fas fa-angle-double-up"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <Searchbar />
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <SignupButton>Sign Up</SignupButton>
      </nav>
    )
  }
}

export default Navbar