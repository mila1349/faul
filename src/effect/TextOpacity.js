import { motion } from "framer-motion";
import React, {useState} from "react";


const Text = ({ duration, defaultValue, ...props }) => {
    const [view, setView] = useState(false)
  const text = defaultValue
    .split("")
    .map((char) => ({ char, animation: "fadeIn" })); // onload fadeIn

    const variants = {
        fontWeight: { fontWeight: [400, 900, 400], opacity: 1 },
        scaleY: { scaleY: [1, 0.1, 1], transformOrigin: "center bottom", opacity: 1 },
        scale: { scale: [1, 0, 1], opacity: 1 },
        wobble: { y: [0, -50, 0], opacity: 1 },
        bigWobble: { y: [0, -150, 0], opacity: 1 },
        fadeIn: (i) => ({ opacity: [0, 1], transition: { delay: i * duration } }),
        normal: { y: 0, opacity: 0 }
      };
      
  return (
    <motion.div
        whileInView={()=>setView(true)}
        
    >
      {text.map(({ char }, index) =>
        char === " " ? (
          "\u0020"
        ) : (
          <motion.span
            key={index}
            style={{
              display: "inline-block",
              userSelect: "none"
            }}
            initial="normal"
            animate={view ? "fadeIn" : "normal"}
            variants={variants}
            custom={index}
            transition={{ type: "spring", duration: duration * 0.001}}
          >
            {char}
          </motion.span>
        )
      )}
    </motion.div>
  );
};

export default Text;
