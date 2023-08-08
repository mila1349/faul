import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import TextOpacity from '../effect/TextOpacity'
import './style.scss'
import {motion} from 'framer-motion'
import TextSlideUp from '../effect/TextSlideUp'

function Home() {
  const [done, setDone] = useState(false)
  return (
    <>
    <div id='hero' className='container'>
        <Navbar/>
        <Social/>
        {/* <img src="images/loop.png" alt="" className='loop'/> */}
        <img src="images/elipse.png" alt="" className='elipse elipse_1'/>
        <img src="images/elipse.png" alt="" className='elipse elipse_2'/>
        <div className="symbol">
          <motion.img src="images/symbol.png" alt="" className='viking'
            initial={{y:"-500px"}}
            animate={
              done?{
                y:0,
                rotate: [0,360],
                transition: {
                  repeat: Infinity,
                  duration:20,
                }
              }:{y:"0",transition:{duration:1.5}}
          }
            onAnimationComplete={()=>setDone(true)}
          />
          <img src="images/shine.png" alt="" className='shine'/>
          {
            done&&
            <h1>
            <TextOpacity
              defaultValue="FAUL"
              duration={0.5}
            />
          </h1>
          }
        </div>
        <motion.div className="text"
          initial={{opacity:0}}
          animate={{opacity:1,transition:{duration:1.5,delay:3}}}
        >
          <div className="rectangle"></div>
          <motion.h5 className='beda'>From Rough to Radiant, uncover Your Inner Gem with FAUL</motion.h5>
        </motion.div>
    </div>
    <div className="description">
      <p>
        <TextSlideUp>Welcome to Faul , where creativity knows no bounds and potential finds its ultimate expression. We are not just a company; we are the architects of aspiration, the enablers of innovation . At Faul , we harness the power of inspiration and dedication to propel creators beyond limits, nurturing their talents and igniting the spark of greatness within. Join us on a transformative journey as we unlock the doors to unparalleled growth, development, and the realization of your true creative potential.
        </TextSlideUp>
        </p>
    </div>
    </>
  )
}

export default Home