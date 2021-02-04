import React, { Component } from 'react'
import { ChannelsList } from './ChannelsList'
import { Channel } from './Channel/Channel'
import './ChannelsContainer.css'

class ChannelsContainer extends Component {
  render() {
    return(
      <div className='channels-container'>
        <h3><i className="fas fa-search"></i> Search Channel</h3>
        <ul className="channel-list">
          {ChannelsList.map((channel, index) => {
            return <Channel
              key={index}
              channel={channel}
            />
          })}
        </ul>
      </div>
    )
  }
}

export default ChannelsContainer