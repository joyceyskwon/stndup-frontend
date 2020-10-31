import React, { Component } from 'react'
import { ReactionTypes } from './ReactionTypes'
import './Reaction.css'

class ReactionContainer extends Component {
  state = {
    isClicked: false,
  }
  
  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    return(
      <div className="reaction-container">
        <div className="reaction-icons">
          {ReactionTypes.map((type, index) => {
            return(
              <li key={index}>
                <i
                  id={type.id}
                  className={type.defaultIcon}
                  onClick={this.handleClick}
                >
                </i>
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ReactionContainer