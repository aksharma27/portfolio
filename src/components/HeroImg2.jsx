import React from 'react'
import "./HeroImg2.css";

const HeroImg2 = (props) => {
    return (
        <div className='hero-img'>
            <div className="img">
                <img className='intro-img' src='https://cdn.pixabay.com/photo/2019/11/05/17/56/employee-4604126_960_720.jpg' alt="programmer" />
            </div>
            <div className="heading">
                <div className="contents">
                    <h1 className='ml-50'>{props.heading}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImg2;