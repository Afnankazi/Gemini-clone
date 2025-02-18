import React, { useState } from 'react';
import { delay, easeIn, motion } from 'framer-motion';
import { assets } from '../assets/assets/assets';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingsIcon from '@mui/icons-material/Settings';
import {BackgroundGradient} from "./BackgroundGradient"
const Sidebar = () => {
  const [clicked,setClicked] = useState(false);
  return (
    
    <div className="h-1vh  bg-gradient-to-b  border-r-2 border-gray-500 shadow-2xl shadow-neutral-100/50 from-white to-neutral-700 dark:from-neutral-800 dark:to-neutral-700 flex flex-col px-6 pt-4">
      {/* Menu Icon */}
      <motion.div onClick={()=>setClicked(!clicked)}
        animate={{width:clicked?250:0}}
        >
      <MenuIcon 
      fontSize='small' className='text-white mt-2 mx-2' 
      />

      </motion.div>
      
      {/* Sidebar Motion Effect */}
      <motion.div
        className=' h-1vh  grid gap-3 px-0 w-full  '
        transition={{
          delay:0.2,
          duration:0.3
        }
        }
        whileHover={{
          width: 250, 
        }}
       
        onHoverStart={()=>setClicked(true)}
        onHoverEnd={()=>setClicked(false)}
       >
         <motion.div
      className="relative text-white h-auto z-30 mt-4 rounded-full border-2 w-fit whitespace-nowrap flex items-center"
      animate={{ width: clicked ? 130 : 40 }}
    >
      <AddCircleIcon fontSize="large" sx={{ padding: 0.5 }} />
      {clicked && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
          className="ml-2 text-sm"
        >
          New chat
        </motion.span>
      )}
    </motion.div>

        <motion.div 
        animate={{
          opacity: clicked ? 1 : 0, 
        }}
        className='bg-black w-[20px] h-[20px] z-30 mt-10  mb-70 '>

        </motion.div>
        <div className='flex flex-col self-end gap-2 h-full pt-10 whitespace-nowrap'>
  <div className="text-gray-300 bg-transparent border-2 rounded-full w-fit h-8 flex items-center px-2 gap-x-2">
    <QuestionMarkIcon fontSize="small" />
    {clicked && (
      <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
      className="ml-2 text-sm"
      >
        Help
      </motion.span>
    )}
  </div>
          <div className="text-gray-300 bg-transparent border-2 rounded-full w-fit h-8 flex items-center px-2 gap-x-2">
            <RestoreIcon fontSize="small" />
            { clicked? <motion.span initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
          className="ml-2 text-sm">Activity</motion.span> :null}
          </div>
        </div>
        <div className="text-gray-300 bg-transparent border-2 rounded-full w-fit h-8 flex items-center px-2 gap-x-2">
            <SettingsIcon fontSize="small" />
            { clicked? <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
          className="ml-2 text-sm" >Settings</motion.p> :null}
          </div>
      </motion.div>
      </div>
        
  );
};

export default Sidebar;
