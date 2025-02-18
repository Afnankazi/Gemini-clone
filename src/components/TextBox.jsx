
import React, { useState } from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from "framer-motion";
const TextBox = () => {
    const [prompt,setPrompt]  = useState("")
    const clicked = prompt.trim().length > 0;
  return (
    <div className=' border-neutral-50 z-50 shadow-md shadow-neutral-100/50 rounded-full w-200 h-12 border-2 p-0.5 flex items-center text-amber-50 pl-3 focus:ring-0'>
        <CollectionsIcon className='mr-2'/>
        <input
        onChange={(e)=>{setPrompt(e.target.value);console.log(e.target.value)}}
        type="text"
        value={prompt}
        className="border-0 ml-2 bg-transparent outline-none focus:ring-0 w-full text-wr"
        placeholder="Ask Gemini"
      />
     
<div className="mr-2.5 transition ease-linear">
  <AnimatePresence mode="wait">
    {clicked ? (
      <motion.div
        key="send-icon"
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <SendIcon />
      </motion.div>
    ) : (
      <motion.div
        key="mic-icon"
        initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: -30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <MicIcon />
      </motion.div>
    )}
  </AnimatePresence>
</div>
    </div>
    
  )
}

export default TextBox
