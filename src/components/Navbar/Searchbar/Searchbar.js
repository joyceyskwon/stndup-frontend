import React from 'react'
import './Searchbar.css'

export const Searchbar = ({ value, onChange }) => {
  return(
    <div className="search-bar">
      {/* <i className="fas fa-search"></i> */}
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}