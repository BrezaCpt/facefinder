import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'; 

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{max: 55}} style={{ height: 150, width: 150}}>
                {/* pa3 Positions image in box */}
                <div className="Tilt-inner pa3">
                    {/* Add style={{paddingTop: '5px'}} to image if it doesnt center */}
                    <img src={brain} alt=""/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;