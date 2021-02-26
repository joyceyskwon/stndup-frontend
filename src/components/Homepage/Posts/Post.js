import React from 'react'
import ReactionContanier from './ReactionContainer'
import './Post.css'

export const Post = props => {
  const { post } = props
  return(
    <div
      className="post grid-item"
    >
      <h3>{post.author}</h3>
      <p>Created: {post.creationDateTime}</p>
      <p>Yesterday:</p>
      <ul>
        {post.yesterday.map((yesterday, index) => {
          return(
            <li key={index}>
             {yesterday} 
            </li>
          )
        })}
      </ul>
      <p>Today:</p>
      <ul>
        {post.today.map((today, index) => {
          return (
            <li key={index}>
              {today}
            </li>
          )
        })}
      </ul>
      <p>What is stopping you?</p>
      <ul>
        {post.obstacle.map((obstacle, index) => {
          return (
            <li key={index}>
              {obstacle}
            </li>
          )
        })}
      </ul>
      <ReactionContanier />
    </div>
  )
}