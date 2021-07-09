import React from 'react';
import './LandingPage.css';

function LandingPage(props) {
    return (
        <div className="landing-page-container">
            <figure className='landing-page-img-wrap'>
                <img className='landing-page-img' src={props.src} alt='images/ts_2.jpeg'/>
                <h1 className='landing-page-layover-text'>{props.description}</h1>
            </figure>
        </div>
    )
}

export default LandingPage
