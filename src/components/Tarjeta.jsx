import React from "react";
import FStar from "./FStars";
import RocketFull from "./RocketFull";
import Rockets from "./Rockets";
import RocketsDgrd from "./RocketsDgrd";
import {ReactComponent as FavIco} from '../img/fav.svg'


const Tarjeta = props => {
    return(
    <figure style={{
        background: "#fff",
        borderRadius: "3px",
        boxShadow: "0 2px 4px #0003",
        margin: "0"
    }}>
        <a className="tarj-img" target="_blank" href={props.url}>
            <img src={props.img} alt={props.title} style={{width: "100%", borderRadius: "inherit"}}/>
            <FavIco className="fav-icon"/>
            
            
            
        </a>
        <figcaption style={{marginTop:"25px", padding:"0 20px 20px", display:"flex", flexDirection:"column"}}>
            <div id="title&desc" style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                textAlign: "start",
                marginBottom:"20px"
                }}>
                <div style={{display:"flex"}}>
                    <img src={props.type} style={{height: "20px"}}/>
                    <div style={{marginLeft:"10px"}}>
                        <a href={props.url} target="_blank" style={{textDecoration: "none"}}>
                            <span style={{width:"70%", display:"block", overflow:"hidden", textOverflow: "ellipsis", whiteSpace:"nowrap", height: "21px", margin: "0", color:"black"}}>{props.title}</span>
                        </a>
                        <div style={{display:"flex"}}>
                            <p style={{color: "grey", fontStyle: "italic", margin: "0"}}>by {props.author}</p>
                            <img src={props.ctry} style={{marginLeft:"10px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="product-info">
                <div className="product-info-line" style={{marginBottom:"10px"}}>
                    <FStar/>
                    {props.rocket}
                </div>

                <div className="product-info-line">
                    <span style={{fontSize:"14px"}}>{props.sales} <span style={{color:"#78909c"}}>Sales</span></span>
                    <span style={{fontSize:"20px", fontWeight:"600"}}>${props.price}</span>
                </div>
                
                <div className="product-info-line">
                    <span className="updated" style={{boxSizing:"border-box", background:"#1ab744", borderRadius:"23px", color:"#fff", fontSize:"14px", lineHeight:"25px", marginTop:"8px", padding:"0 15px 0 32px", position:"relative"}}> Updated </span>
                </div>
            </div>

            <div className="product-links">
                <a href="https://www.templatemonster.com/intense-multipurpose-html-template.html" target="_blank" className="link-btn link-btn1"> Details </a>
                <a href="https://demo.templatemonster.com/demo/58888.html" target="_blank" className="link-btn link-btn2"> Live Demo </a>
            </div>
        </figcaption>
    </figure>
    )
};

export default Tarjeta;