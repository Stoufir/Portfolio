import React from 'react';

function Banner({ imgSrc, text }) {
    return (
        <div className="banner">
            <img src={imgSrc} alt="Banner" />
            teeeest
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Banner;
