import React from 'react';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';

const Course = ({ image, title, category, participants, rating, price }) => {
    return (
        <div className='shadow-lg p-2 min-w-[15rem] bg-white rounded-md'>
            <img src={image} alt="" />
            <div className='mt-2 text-Teal text-xs'>{category}</div>
            <div className='text-sm mt-2 font-bold'>{title}</div>
            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <div className='bg-Solitude p-1 rounded-full '><AiOutlineUser className='text-Teal' /></div>
                    <div>{participants}</div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='bg-Solitude p-1 rounded-full'><AiOutlineStar className='text-Teal' /></div>
                    <div className='text-sm font-bold'>{rating}</div>
                </div>

                <div className='text-sm font-bold'>${price}</div>

            </div>
        </div>
    );
};

export default Course;