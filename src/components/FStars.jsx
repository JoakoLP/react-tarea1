import React from "react";
import Star from '../img/star.svg';

const FStar = () => {
    return(
        <div style={{width:"118px", display: "flex", justifyContent: "space-between" }}>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
        </div>
    )
}

export default FStar;