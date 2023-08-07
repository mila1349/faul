import React from 'react'
import './style.scss'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <motion.nav
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:1.5}}}
    >
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/creators">Creators</a></li>
            <li><a href="/brands">Brands</a></li>
        </ul>
    </motion.nav>
  )
}

export default Navbar