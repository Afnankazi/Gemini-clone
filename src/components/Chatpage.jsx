import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import TextBox from "./TextBox";
import Markdown from "react-markdown";
import PersonIcon from "@mui/icons-material/Person";

import "../index.css";

import { AnimatedSpan, Terminal, TypingAnimation } from "./AnimatedSpan";
import { useLocation } from "react-router-dom";

const Chatpage = ({location}) => {
  const topref = useRef(null);
  const loc =location;
  const [output, setOutput] = useState(() => []);

  const handleScroll = () => {
    if (topref.current) {
      topref.current.scrollTop = topref.current.scrollHeight;
      console.log(topref.current.scrollTop);
    }
  };

  useEffect(() => {
    if (loc.state?.prompt) {
      setOutput((prev) => [
        ...prev,
        loc.state.prompt,
      ]);
       setOutput((pre) => [...pre, "Ai Response"]);
    }
  }, [loc.state]);

  function handelChildData(Text) {
    setOutput((pre) => [...pre, Text]);
    setOutput((pre) => [...pre, "Ai Response"]);
    setTimeout(() => {
      handleScroll();
    }, 200);
  }

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
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PersonIcon className="text-amber-50" />
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-end pb-16 px-4">
        <div className="w-full max-w-4xl relative">
          {/* Content Window */}
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 mb-4 shadow-2xs shadow-neutral-50/15">
            <div className="flex items-start gap-4 text-amber-50">
              <div
                ref={topref}
                className="overflow-y-auto w-full h-[60vh] scrollbar-hidden scroll-smooth leading-10 tracking-wide"
              >
                {Array.isArray(output) && output.length > 0
                  ? output.map((item, index) =>
                      index % 2 != 0 ? (
                        <div key={index}>
                          <Markdown
                            components={{
                              code({ inline, children, ...props }) {
                                return (
                                  <Terminal>
                                    <code
                                      className={`scrollbar-hidden text-white px-2 py-1 rounded ${
                                        inline ? "inline" : "block"
                                      }`}
                                      {...props}
                                    >
                                      {children}
                                    </code>
                                  </Terminal>
                                );
                              },
                            }}
                          >
                            {item}
                          </Markdown>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="flex w-full justify-end rounded-full"
                        >
                          <div className="px-3 py-1 bg-purple-950 text-white rounded-full text-right">
                            {item}
                          </div>
                        </div>
                      )
                    )
                  : "Error: No messages"}
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="relative z-20 mt-2 pb-2 ml-8">
            <TextBox sendData={handelChildData} Click={handleScroll} />
            <button
              className="w-2 h-2 bg-amber-50"
              onClick={handleScroll}
            ></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatpage;
