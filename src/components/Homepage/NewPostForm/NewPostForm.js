import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './NewPostForm.css'

class NewPostForm extends Component {
  render() {
    const { currentUser, value, handleChange, handleSubmit } = this.props
    return(
      <div className="new-post-container">
        <img
          className="current-user-image"
          src={currentUser}
          alt="Current User!"
        />
        {/* <i className='icon large circular blue shield'></i> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              value={value}
              onChange={handleChange}
              placeholder='What do you need to do today?'
            />
            <Form.Button
              type='submit'
            >
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default NewPostForm