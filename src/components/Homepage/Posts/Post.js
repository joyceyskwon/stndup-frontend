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
      <p>{post.creationDateTime}</p>
      {/* <p>Yesterday:</p> */}
      <ul>
        {post.yesterday.map((yesterday, index) => {
          return(
            <li key={index}>
              <input type="checkbox">
              </input>
              <label>{yesterday}</label>
            </li>
          )
        })}
      </ul>
      <ReactionContanier />
    </div>
  )
}