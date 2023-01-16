import React from "react";
import Rocket from '../img/rocket.svg';
import One from '../img/one.png';

const RocketFull = () => {
    return(
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div id="rockets">
            <img src={Rocket}/>
            <img src={Rocket}/>
            <img src={Rocket}/>
        </div>
        <img src={One} style={{height:"20px", marginLeft:"10px"}}/>
        </div>
    )
}

export default RocketFull;