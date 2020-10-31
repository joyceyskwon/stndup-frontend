import React, { Component } from 'react'
import './NewPostForm.css'

class NewPostForm extends Component {
  render() {
    const { currentUser,value, onChange } = this.props
    return(
      <div className="new-post-form">
        <img
          className="current-user-image"
          src={currentUser}
          alt="Current User!"
        />
        {/* <i className='icon large circular blue shield'></i> */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder='What do you need to do today?'
        />
      </div>
    )
  }
}

export default NewPostForm