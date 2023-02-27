import React from 'react';
import hero from '../../assets/hero.png';
import { logos } from '../../Data';
import { motion } from 'framer-motion';

const Home = () => {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            }
        }

    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }
    return (
        <div className="section" id='home'>
            <div className='md:flex justify-center items-center'>

                <div>

                    <div className='font-bold text-Teal text-xs'>
                        {""}
                        Your E-learning Partner
                    </div>
                    <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
                        This is <br /> the new way <br /> to learn online
                    </div>
                    <p className='text-sm leading-7 text-gray max-w-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit provident repellendus aperiam omnis iusto.</p>
                    <div className='mt-6'>
                        <button className='px-6 py-3 font-bold bg-Teal text-white rounded-lg mr-4 text-sm'>GET STARTED</button>
                        <button className='px-6 py-3 font-bold border border-gray rounded-lg text-sm'>DISCOVER</button>

                    </div>

                </div>

                <div className='md:w-[60%]'>
                    <img src={hero} alt="" />
                </div>


            </div>
            <div>
                <p className='text-center text-xl'>
                    We Collaborate with {""}
                    <span className='text-Teal'>100+ leading university ans companies</span>
                </p>
                <motion.div variants={container} initial='hidden' whileInView='visible' className='flex items-center justify-center flex-wrap gap-8 p-10'>
                    {
                        logos.map((logo, index) => (
                            <motion.div variants={item} whileHover={{ scale: 1.5 }} key={index} className='w-28'>
                                <img src={logo} alt="" className='object-fit w-full' />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Home;