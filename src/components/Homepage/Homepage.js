import React, { Component } from 'react'
import './Homepage.css'
import 'semantic-ui-css/semantic.min.css'
import { PostsData } from './Posts/PostsData'
import { Post } from './Posts/Post'
import ChannelsContainer from './Channels/ChannelsContainer'
import ChatContainer from './Chat/ChatContainer'
import NewPostForm from './NewPostForm/NewPostForm'

class Homepage extends Component {

  handleChange = (e) => {
    console.log(e, '<~~~~~~~ VALUE');
  }

  handleSubmit = (e) => {
    console.log(e, '<~~~~~~~~SUBMIT');
  }

  render() {
    const { currentUser } = this.props
    return(
      <div className="homepage grid">
        {/* <ChannelsContainer /> */}
        <NewPostForm
          currentUser={currentUser}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="posts-container">
          {PostsData.map((post, index) => {
            return(
              <Post 
                key={index}
                post={post}
              />
            )
          })}
        </div>
        {/* <ChatContainer /> */}
      </div>
    )
  }
}

export default Homepage