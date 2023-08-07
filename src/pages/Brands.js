import React, { useEffect, useState } from 'react'
import './style.scss'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import TextSlideUp from '../effect/TextSlideUp'
import {motion} from 'framer-motion'

function Brands() {
    const [where, setWhere] = useState(1)


    useEffect(()=>{
        console.log("wheeer",where)
    },[where])
  return (
    <>
    <Social/>
    <div id='brands' className='container'>
        <Navbar/>
        <section className='desc big'>
            <h2><TextSlideUp>Brands partnership</TextSlideUp></h2>
            <p><TextSlideUp>Faul connects brands that want authentic partnership and genuine react with talent that generate tens of millions of views everymonth. Together we create campaigns that resonate with the right audience.</TextSlideUp></p>
            <p><TextSlideUp>Faul is your full service agency for everything from simple promotions to creative collaborations or high profile global events.</TextSlideUp></p>
            <p><TextSlideUp>We can help you produce relevant, authentic content that hits right tone for your brand value and the right target for your marketing metrics</TextSlideUp></p>
        </section>
        <section className='images'>
            <motion.img src="images/patterns-1.png" alt="" className='pattern'
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:1}}}
            />
            <div className="info info_1 glass">
                <div className="line"></div>
                <img src="images/lamp.png" alt="" />
                <p>Oportunity</p>
            </div>
            <div className="info info_2 glass">
                <div className="line"></div>
                <img src="images/setting.png" alt="" />
                <p>Skill Development</p>
            </div>
            <div className="info info_3 glass">
                <div className="line"></div>
                <img src="images/brand.png" alt="" />
                <p>Brand Building</p>
            </div>
            <div className="info info_4 glass">
                <div className="line"></div>
                <img src="images/exposure.png" alt="" />
                <p>Exposure</p>
            </div>
        </section>
        <section className='desc small'>
            <h2>Brands partnership</h2>
            <p>Faul connects brands that want authentic partnership and genuine react with talent that generate tens of millions of views everymonth. Together we create campaigns that resonate with the right audience.</p>
            <p>Faul is your full service agency for everything from simple promotions to creative collaborations or high profile global events.</p>
            <p>We can help you produce relevant, authentic content that hits right tone for your brand value and the right target for your marketing metrics</p>
        </section>
    </div>
    <div className="offers">
        <h2>What we offer to brands</h2>
        <div className="offer">
            <img src="images/circle.png" alt="" className='circle'
                style={{transform:`translate(${where=='2'?60:where=='0'?-160:-50}%,-50%)`}}
            />
            <div className="glass">
                <div className="line-ho"></div>
                <div className="offer_1 off_1" onMouseEnter={()=>setWhere(0)} onMouseLeave={()=>setWhere(1)}>
                    <h4>integrated sponsorship</h4>
                    <p>We can help you produce relevant, authentic content that hits right tone for your brand value and the right target for your marketing metrics</p>
                </div>
                <div className="line"></div>
                <div className="offer_1 off_2">
                    <h4>event attendance</h4>
                    <p>We can help you produce relevant, authentic content that hits right tone for your brand value and the right target for your marketing metrics</p>
                </div>
                <div className="line"></div>
                <div className="offer_1 off_3" onMouseEnter={()=>setWhere(2)} onMouseLeave={()=>setWhere(1)}>
                    <h4>integrated sponsorship</h4>
                    <p>We can help you produce relevant, authentic content that hits right tone for your brand value and the right target for your marketing metrics</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Brands