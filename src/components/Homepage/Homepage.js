import React, { Component } from 'react'
import './Homepage.css'
import { PostsData } from './Posts/PostsData'
import { Post } from './Posts/Post'
import ChannelsContainer from './Channels/ChannelsContainer'
import ChatContainer from './Chat/ChatContainer'
import NewPostForm from './NewPostForm/NewPostForm'

class Homepage extends Component {
  render() {
    const { currentUser } = this.props
    return(
      <div className="homepage">
        <ChannelsContainer />
        <div className="posts-container">
          <NewPostForm 
            currentUser={currentUser}
          />
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