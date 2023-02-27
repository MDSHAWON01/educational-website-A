import React from 'react';
import { motion } from 'framer-motion';
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';


const Footer = () => {
    return <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ duration: 1 }}
        className="bg-Teal p-10"
    >
        <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-10 text-white'>

            <div>
                <div className='mb-6 font-bold'>Get Started</div>
                <p className='leading-7 text-gray text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium maxime rerum fugit quod non atque accusantium sapiente impedit tenetur expedita.</p>
            </div>

            <div>
                <div className='font-bold mb-6'>Services</div>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-sm hover:underline'>Web Design</a>
                    <a href="" className='text-sm hover:underline'>Web Development</a>
                    <a href="" className='text-sm hover:underline'>Digital Marketing</a>
                    <a href="" className='text-sm hover:underline'>Science</a>
                </div>
            </div>

            <div>
                <div className='font-bold mb-6'>Company</div>
                <div className='flex flex-col gap-4'>
                    <a href="" className='text-sm hover:underline'>Privacy Policy</a>
                    <a href="" className='text-sm hover:underline'>SiteMAP</a>
                    <a href="" className='text-sm hover:underline'>Careers</a>
                    <a href="" className='text-sm hover:underline'>Terms & Conditions</a>
                </div>
            </div>

            <div>
                <div className='font-bold mb-6'>Follow us</div>
                <div className='gap-8'>
                    <div className='text-sm mb-4'>abc@gamil.com</div>
                    <div className='text-sm'>+990233663</div>
                    <div className='flex gap-6 mt-4'>
                        <a className='text-xl hover:scale-110'><BsFacebook /></a>
                        <a className='text-xl hover:scale-110'><BsTwitter /></a>
                        <a className='text-xl hover:scale-110'><BsInstagram /></a>
                        <a className='text-xl hover:scale-110'><BsPinterest /></a>

                    </div>
                </div>
            </div>






        </div>

    </motion.div>


};

export default Footer;