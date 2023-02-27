import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ icon, category }) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }
    return (
        <motion.div variants={item} whileHover={{ scale: 1.1 }} className='flex items-center flex-col gap-4 bg-sky-700 p-8 rounded-md'>
            <div className="text-3xl text-white">{icon}</div>
            <div className='text-white'>{category}</div>
            <a href="" className='text-sm text-white'>View More</a>
        </motion.div>
    );
};

export default Categories;