import React, { Component } from 'react'
import './Homepage.css'
import { PostsData } from './Posts/PostsData'
import { Post } from './Posts/Post'
import NewPostForm from './NewPostForm/NewPostForm'

class Homepage extends Component {
  render() {
    return(
      <div className="homepage">
        <NewPostForm />
        {PostsData.map((post, index) => {
          return(
            <Post 
              key={index}
              post={post}
            />
          )
        })}
      </div>
    )
  }
}

export default Homepage