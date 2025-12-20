import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section>
                <header className='fixed top-0 left-0 w-full z-50 bg-blur-smoke/10 backdrop-filter backdrop-blur-lg shadow-md'>
                <div className='mw-[1200px] my-0 mx-40 flex justify-between items-center'>
                    <div className='py-4 px-4'>
                        <i></i>
                        <h1 className='text-3xl font-bold text-[#ff4d4d]'>Pizza Paradise</h1>
                    </div>
                        <nav className='hidden md:flex space-x-6'>
                            <a to="#hero" href="#Hero"
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Home
                            </a>
                            <a to='#aboutus' href="#AboutUs"
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                About
                            </a>
                            <a to='#menu' href="#Menu"
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Menu
                            </a>
                            <a to='#contactus' href="#ContactUS"
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Contact
                            </a>
                            <Link to='/account/login' className='text-blue-500 text-decoration underline'>
                                SignIn
                            </Link>
                        </nav>
                </div>
            </header>
            </section>
        </>);
};

export default Navbar;