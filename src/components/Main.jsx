import React from 'react';
import { BackgroundBeamsWithCollision } from './BackgroundBeamsWithCollision';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion';
import TextBox from './TextBox';
import Markdown from 'react-markdown';
import PersonIcon from '@mui/icons-material/Person';
import { assets } from '../assets/assets/assets';
import "../index.css";
import {AnimatedSpan} from "./AnimatedSpan"

const Main = () => {
  const sqlContent = `
  # What is SQL?
  
  SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.

  ## Key Features:
  - **Data Querying**: Retrieve specific data using \`SELECT\`
  - **Data Manipulation**: Modify records with \`INSERT\`, \`UPDATE\`, \`DELETE\`
  - **Data Definition**: Structure databases using \`CREATE\`, \`ALTER\`, \`DROP\`
  - **Data Control**: Manage access with \`GRANT\`, \`REVOKE\`

  ## Example Query:
  \`\`\`sql
  CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
  );

  INSERT INTO Students (id, name, age) 
  VALUES (1, 'Alice', 20);

  SELECT * FROM Students;
  \`\`\`
   # What is SQL?
  
  SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.

  ## Key Features:
  - **Data Querying**: Retrieve specific data using \`SELECT\`
  - **Data Manipulation**: Modify records with \`INSERT\`, \`UPDATE\`, \`DELETE\`
  - **Data Definition**: Structure databases using \`CREATE\`, \`ALTER\`, \`DROP\`
  - **Data Control**: Manage access with \`GRANT\`, \`REVOKE\`

  ## Example Query:
  \`\`\`sql
  CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
  );

  INSERT INTO Students (id, name, age) 
  VALUES (1, 'Alice', 20);

  SELECT * FROM Students;
  \`\`\`
  
  `;

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
              <img 
                src={assets.gemini2} 
                className="w-12 h-12 rounded-full "
                alt="Gemini AI avatar"
              />
              <div className="overflow-y-auto h-[60vh] scrollbar-hidden scroll-smooth">
                <Markdown components={{
                  code({node, inline, className, children, ...props}) {
                    return (
                      <AnimatedSpan>
                    <code className="bg-amber-50 px-1.5 py-0.5 rounded" {...props}>
                      {children}
                    </code>
                    </AnimatedSpan>
                    )
                  }
                }}>
                  {sqlContent}
                </Markdown>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="relative z-20 mt-2 pb-2 ml-8">
            <TextBox />
            <p className="text-center text-xs text-amber-50/60 mt-3">
              Gemini may produce inaccurate information. Verify critical content.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;