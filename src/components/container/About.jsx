import React from 'react';
import about from '../../assets/About.jpg';

const About = () => {
    return (
        <div className="section" id='about'>
            <div className='grid md:grid-cols-2 gap-10 place-items-center'>
                <div className='border-[3px] border-solid border-Teal rounded-lg'>
                    <img src={about} alt="" className='p-4' />
                </div>
                <div>
                    <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
                        We provide the <br />best {""} <span className="text-Teal"> online courses</span>
                    </div>
                    <p className='text-gray text-sm leading-7 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, facilis? Hic delectus sapiente quidem unde, odit, non aut esse deleniti modi harum architecto eius assumenda? Aspernatur vel officiis explicabo eos!</p>
                    <button className='px-6 py-3 text-sm border border-solid border-gray rounded-lg font-bold'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;