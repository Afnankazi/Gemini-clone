import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatpage from '../components/Chatpage'
import { useLocation } from 'react-router-dom'
const ChatApp = () => {
    const loc = useLocation()
    console.log(loc);
    
  return (
    
    <div>
        <div className="grid grid-cols-[1fr_60fr]">
        <Sidebar />
        <Chatpage location={loc}  />
      </div>
    </div>
  )
}

export default ChatApp
