import React, { useRef, useState } from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import TextBox from "./TextBox";
import Markdown from "react-markdown";
import PersonIcon from "@mui/icons-material/Person";
import { assets } from "../assets/assets/assets";
import "../index.css";
import {useNavigate} from "react-router-dom"
import { sqlContent } from "../lib/content";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "./AnimatedSpan";

const Main = ({userImage}) => {
  const [output, setOutput] = useState("");
  const topref = useRef(null);
  const nav =    useNavigate();
  

  function handelChildData(Text) {
    const id = 2;
    setOutput(Text);
    console.log("nav:"+Text);
    
    nav(`/chatpage/${id}`,{state:{prompt:Text}})
   
  }

 // useEffect(())

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      <BackgroundBeamsWithCollision className="absolute inset-0 -z-10" />

      {/* Header Section */}
      <header className="flex justify-between items-start p-4">
        <div className="text-amber-50">
          <motion.div className="flex items-center gap-1">
            <span className="text-2xl font-gemini">Gemini</span>
            <ArrowDropDownIcon fontSize="small" />
          </motion.div>
          <p className="text-gray-400 text-lg">2.0 Flash</p>
        </div>

        <motion.div
          className="p-2 rounded-full "
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* <PersonIcon className="text-amber-50" /> */}
          {userImage ? (
            <img 
              src={userImage} 
              alt="User Profile" 
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <PersonIcon className="text-amber-50" />
          )}
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-end pb-16 px-4">
        <div className="w-full max-w-4xl relative">
          {/* Content Window */}
          <div className="text-amber-50 flex items-center justify-center w-full mb-70">
          Hello Afnan
          </div>
         

          {/* Input Section */}
          <div className="relative z-20 mt-2 pb-2 ml-8">
            <TextBox sendData={handelChildData}  />
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;