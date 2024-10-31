import React from 'react'
import BannerPng from "../../assets/fruit-plate2.png"
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'

const Banner2 = () => {
  return (
    <section className=''> 
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-0 py-14 md:py-24">
       
        {/* Brand info */}
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                 variants={FadeUp(0.5)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true}}
                className='text-xl lg:text-5xl font-bold uppercase'
                >Online Fruit Store</motion.h1>
                <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, laudantium architecto dolores necessitatibus dignissimos praesentium quae perspiciatis sed libero enim. Nulla architecto tempore error aliquam. Cumque doloribus accusantium alias doloremque.</motion.p>
                <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, accusamus est nesciunt porro aperiam dolore!</motion.p>
                  {/* Button section */}
                  <motion.div 
                   variants={FadeUp(1.1)}
                     initial="hidden"
                     animate="visible"
                     className='flex justify-center md:justify-start'
                     
                  >
                 
                    <button className='primary-btn '>Download The App</button>
                    </motion.div>
            </div>
        </div>
         {/* Banner image */}
         <div className='flex justify-center items-center'>
            <motion.img 
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:"spring",stiffness:100,delay:0.2}}
            viewport={{once:true}}
            src={BannerPng} 
            alt='' 
            className='w-[350px] md:max-w-[500px] object-cover h-full drop-shadow'/>
        </div>
      </div>
    </section>
  )
}

export default Banner2
