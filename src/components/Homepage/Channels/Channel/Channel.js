import React from 'react'
import './Channel.css'

export const Channel = props => {
  const { title } = props.channel
  return(
    <li className="channel-name">
      # {title}
    </li>
  )
}