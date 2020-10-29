import React from 'react'
import './Post.css'

export const Post = props => {
  const { post } = props
  return(
    <div
      className="post"
    >
      <h3>{post.author}</h3>
      <p>Created: {post.creationDateTime}</p>
      <p>Yesterday:</p>
      <ul>
        {post.yesterday.map((y, index) => {
          return(
            <li key={index}>
             {y} 
            </li>
          )
        })}
      </ul>
      <p>Today:</p>
      <ul>
        {post.today.map((y, index) => {
          return (
            <li key={index}>
              {y}
            </li>
          )
        })}
      </ul>
      <p>What is stopping you?</p>
      <ul>
        {post.obstacle.map((y, index) => {
          return (
            <li key={index}>
              {y}
            </li>
          )
        })}
      </ul>
    </div>
  )
}