import React from 'react'
import './style.scss'
import {motion} from 'framer-motion'

function Social() {
  return (
    <motion.div className='social'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:1.5}}}
    >
        <div className="line line_1"></div>
        <a href="">
            <img src="images/instagram.png" alt="" />
        </a>
        <a href="">
            <img src="images/facebook.png" alt="" />
        </a>
        <a href="">
            <img src="images/twitter.png" alt="" />
        </a>
        <a href="">
            <img src="images/youtube.png" alt="" />
        </a>
        <div className="line line_2"></div>
    </motion.div>
  )
}

export default Social