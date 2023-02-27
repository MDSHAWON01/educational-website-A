import React from 'react';
import teacher1 from '../../assets/teacher1.png';
import teacher2 from '../../assets/teacher2.png';
import { accordions } from '../../Data';
import Accordion from './Accordion';

const Teacher = () => {
    return (
        <div className="section" id='teacher'>

            <div className="grid sm:grid-cols-2 place-items-center gap-8">
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        Become <span className="text-Teal">An instructor</span> <br />of our platform
                    </div>
                    <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis eveniet neque sint quae quia tempora consequatur. Neque, aut sequi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, natus.</p>
                    <button className='py-3 px-4 text-sm bg-Teal text-white rounded-lg  font-bold mt-5 hover:bg-sky-700'>Start Teaching</button>
                </div>
                <div className='p-4 md:w-3/4 sm:row-start-1'>
                    <img src={teacher1} alt="" />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 place-items-center gap-8 mt-10">
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        Become <span className="text-Teal">An instructor</span> <br />of our platform
                    </div>
                    <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis eveniet neque sint quae quia tempora consequatur. Neque, aut sequi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, natus.</p>
                    <button className='py-3 px-4 text-sm bg-Teal text-white rounded-lg  font-bold mt-5 hover:bg-sky-700'>Get Stared</button>
                </div>
                <div className='p-4 md:w-3/4'>
                    <img src={teacher2} alt="" />
                </div>
            </div>

            <div className='text-center font-bold my-8 sm:text-[1.8rem] text-[1.5rem]' > Frequently <span className='text-Teal'>Asked Questions</span></div>

            <div className='mt-12 max-w[700px] mx-auto'>
                {accordions.map((accordion) => {
                    return <Accordion key={accordion.id} {...accordion} />
                })}
            </div>

        </div>
    );
};

export default Teacher;