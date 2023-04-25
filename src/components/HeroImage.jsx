import React from 'react'
import "./HeroImg.css";
import { Link } from 'react-router-dom';
import introImage from "../assets/programmer.jpg";

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img className='intro-img' src={introImage} alt="programmer" />
            </div>

            <div className="content">
                <p>
                    Hi, I'm a Developer/Freelancer/Job Seeker
                </p>
                <h1>React Developer</h1>
                <div>
                    <Link to='/project' className="btn">Projects</Link>
                    <Link to='/contact' className="btn btn-light">Contact</Link>
                </div>
            </div>

        </div>
    )
}

export default HeroImage;
