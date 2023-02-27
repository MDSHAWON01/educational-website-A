import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="section" id='contact'>
            <div className='max-w-[600px] text-center mx-auto'>
                <div className='sm:text-3xl text-2xl font-bold mb-5'>
                    Subscribe Newsletter
                </div>
                <p className='leading-7 text-sm text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi vero ut neque aliquam eius. Accusantium ducimus fugit omnis est aspernatur rerum ab. Natus quisquam eaque nostrum perspiciatis quis error.</p>
                <motion.form
                    className='mt-5'
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className='sm:p-3 p-2 outline-none shadow-lg sm:w-72 w-72 text-sm'
                    />
                    <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md hover:bg-sky-700 font-bold'>Subscribe</button>
                </motion.form>

            </div>
        </div>
    );
};

export default Contact;