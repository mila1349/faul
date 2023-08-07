import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import TextSlideUp from '../effect/TextSlideUp'
import {motion} from 'framer-motion'

function Creators() {
  return (
    <div id='creators' className='container'>
        <Navbar/>
        <Social/>
        <h2>
            <TextSlideUp>
            creators
            </TextSlideUp>
        </h2>
        <p><TextSlideUp>At Faul, our YouTube management services are designed to amplify your online presence and elevate your content to new heights. Here's how we partner with content creators like you:
        </TextSlideUp>
        </p>
        <div className="creator-container">
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25}}}
            >
                <div className="line-ho"></div>
                <h4>Content Strategy</h4>
                <p>Our team crafts data-driven content strategies that align with your brand, target audience, and niche, ensuring each upload resonates and captivates.</p>
                <img src="images/pattern1.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25,delay:0.25}}}
            >
                <div className="line-ho"></div>
                <h4>Audience Engagement</h4>
                <p>We foster a thriving community by engaging with your audience through comments, messages, and live sessions, fostering a sense of connection and loyalty.</p>
                <img src="images/pattern2.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25,delay:0.5}}}
            >
                <div className="line-ho"></div>
                <h4>Collaboration Opportunities</h4>
                <p>We facilitate partnerships with like-minded creators, opening doors to cross-promotion and collaborative projects that broaden your reach.</p>
                <img src="images/pattern3.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25}}}
            >
                <div className="line-ho"></div>
                <h4>Video Optimization</h4>
                <p>From editing to SEO, we optimize every video for maximum views, watch time, and audience retention.</p>
                <img src="images/pattern4.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25,delay:0.25}}}
            >
                <div className="line-ho"></div>
                <h4>Brand Development</h4>
                <p>We help you build a strong personal brand, making you stand out in a crowded digital landscape and creating a lasting impression.</p>
                <img src="images/pattern6.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25,delay:0.5}}}
            >
                <div className="line-ho"></div>
                <h4>Strategic Planning</h4>
                <p>Our experts devise long-term plans to set clear goals, milestones, and KPIs, guiding your channel's growth and evolution.</p>
                <img src="images/pattern7.png" alt="" />
            </motion.div>
            <motion.div className="creator glass"
                initial={{x:"-30px",opacity:0}}
                animate={{x:"0",opacity:1, transition:{duration:0.25}}}
            >
                <div className="line-ho"></div>
                <h4>Constant Innovation</h4>
                <p>The digital landscape evolves rapidly, and we ensure you stay at the forefront by incorporating the latest trends, techniques, and technologies.</p>
                <img src="images/pattern5.png" alt="" />
            </motion.div>
            <motion.p className='nahh'
                 initial={{x:"-30px",opacity:0}}
                 animate={{x:"0",opacity:1, transition:{duration:0.25,delay:0.25}}}
            >With Faul by your side, you're not just a content creator – you're a digital visionary with the tools and support to shape your YouTube journey like never before.</motion.p>
        </div>
    </div>
  )
}

export default Creators