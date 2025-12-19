import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className='bg-blur mt-0 relative w-full'>
                <div className='mw-[1200px] my-0 mx-40 flex justify-between items-center'>
                    <div className='py-4 px-4'>
                        <i></i>
                        <h1 className='text-3xl font-bold text-[#ff4d4d]'>Pizza Paradise</h1>
                    </div>
                        <nav className='md:flex space-x-6'>
                            <Link to="/"
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Home
                            </Link>
                            <Link to='/about'
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                About
                            </Link>
                            <Link to='/'
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Menu
                            </Link>
                            <Link to='/pizzaparadise/policies'
                            className='hover:underline decoration-[#ff4d4d] decoration-2 underline-offset-4'>
                                Policy
                            </Link>
                            <Link to='/account/login' className='text-blue-500 text-decoration underline'>
                                SignIn
                            </Link>
                        </nav>
                </div>
            </header>
        </>);
};

export default Navbar;