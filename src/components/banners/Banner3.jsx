import React from 'react'
import BannerPng from "../../assets/banner-bg.jpg"
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const bgStyle={
    backgroundImage:`url(${BannerPng})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
};
const Banner = () => {
  return (
    <section className='container mb-12'> 
      <div 
      style={bgStyle}
      className="container grid grid-cols-1 md:grid-cols-2 space-y-0 py-14 rounded-xl">
        {/* Blank image */}
        <div></div>
    
        {/* Brand info */}
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                 variants={FadeLeft(0.5)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true}}
                className='text-xl lg:text-4xl font-bold uppercase'
                >Get Fresh Fruits Today</motion.h1>
                <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laudantium architecto dolores necessitatibus dignissimos praesentium quae perspiciatis sed libero enim. Nulla architecto tempore error aliquam. Cumque doloribus accusantium alias doloremque.</motion.p>
                
                  {/* Button section */}
                  <motion.div  
                  variants={FadeLeft(0.9)}
                     initial="hidden"
                     animate="visible"
                     className='flex justify-center md:justify-start'
                     
                  >
                    <button className='primary-btn '>Order Now</button>
                    </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
