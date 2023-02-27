import React, { useEffect, useState } from 'react';
import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import NavLink from './NavLink';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        }

        window.addEventListener('scroll', scrollActive);
        return () => window.removeEventListener('scroll', scrollActive);
    }, [active])


    return (
        <div className={`${active ? "shadow-lg bg-Solitude" : ""} w-full fixed top-0 left-0 z-20`}>
            <div>
                <div className="mx-auto container py-4 flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                        <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)} />
                        <div className='text-xl text-Teal font-bold tracking-wide uppercase'>SKILLX</div>
                    </div>
                    <div className='sm:flex items-center hidden'>
                        {navLinks.map((navLink) => {
                            return <NavLink key={navLink.id} {...navLink} />
                        })}
                    </div>
                    <button className='py-2 px-6 font-bold text-sm border hover:bg-Teal hover:text-white border-solid rounded-lg border-gray'>Sign Up</button>
                    {toggle && <motion.div
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='h-full fixed w-96 top-0 left-0 z-20 bg-Teal flex flex-col justify-center items-center text-white shadow-lg gap-8 py-8 '>
                        {navLinks.map((navLink) => {
                            return <MobileNav key={navLink.id} {...navLink} setToggle={setToggle} />
                        })}
                        <HiX className="absolute right-12 top-12 text-3xl cursor-pointer" onClick={(prev) => setToggle(!prev)} />
                    </motion.div>}
                </div>

            </div>
        </div>
    );
};

export default Navbar;