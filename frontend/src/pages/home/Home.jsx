import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Message from '../../components/messages/Message'
import Messages from '../../components/messages/Messages'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home
