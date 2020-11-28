import React from 'react'
import './Searchbar.css'

export const Searchbar = ({ value, onChange }) => {
  return(
    <div className="search-bar-container">
      {/* <i className="fas fa-search"></i> */}
      <input
        className="search-bar"
        type="text"
        value={value}
        onChange={onChange}
        placeholder='What is on your mind?'
      />
    </div>
  )
}