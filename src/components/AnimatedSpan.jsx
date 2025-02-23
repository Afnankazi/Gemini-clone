
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);



export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};



export const Terminal = ({ children, className }) => {
  const [Clicked, setClicked] = useState(false);

  return (
    <div
      className={cn(
        "z-0 h-full max-h-[900px] w-full max-w-lg rounded-xl border border-border ",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4 relative">

  <div className="flex justify-between items-center sticky top-0">
    <div className="flex flex-row gap-x-2">
      <div className="h-2 w-2 rounded-full bg-red-500"></div>
      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
    </div>

    <div onClick={()=>setClicked(true)} className="text-sm cursor-pointer hover:text-gray-400 transition-all duration-200  ">
      {Clicked? <LibraryAddCheckIcon/>:<ContentCopyIcon />}

    </div>
  </div>
</div>

      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};
