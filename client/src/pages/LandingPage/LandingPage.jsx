import React from "react";
import { } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer.jsx"
import Hero from "../../components/Landing/Hero.jsx";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div> <h1>This is Landing Page</h1>
            </div>
            <Hero />
            <div className="flex flex-col">
            </div>
            <div><Footer /></div>
        </>

    )
}

export default Landing;