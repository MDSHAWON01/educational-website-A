import React from 'react';
import { categories } from '../../../Data';
import { courses } from '../../../Data';
import Categories from './Categories';
import Course from './Course';
import { motion } from 'framer-motion';

const Courses = () => {
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
                staggerChildren: 0.2,
            }
        }

    }
    return (
        <div className="section" id='courses'>

            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Our Top <span className='text-Teal'>Categories</span>
                </div>
                <p className='text-sm leading-7 text-gray mx-auto max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut illum similique repudiandae sequi perferendis autem accusamus quisquam error laboriosam possimus asperiores quos recusandae dolore nulla, veniam nam totam incidunt laborum. Sunt, debitis id quae amet assumenda.</p>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className='grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12'>
                {
                    categories.map((category, index) => {
                        return <Categories key={index} {...category} />
                    })
                }
            </motion.div>
            <div className="text-xl font-bold mt-32">Most popular courses</div>
            <div className='overflow-x-hidden mt-12 w-full relative'>
                {/* relative */}
                {/* animate-slide */}
                <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[360%] w-[480%] animate-slide '>
                    {
                        courses.map((course) => {
                            return <Course key={course.ic} {...course} />
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default Courses;