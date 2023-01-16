import React from "react";

const Titulo = props => {
    return(
        <p style={{fontSize:"20px", lineHeight:"30px"}}><strong>{props.children}</strong></p>
    )
};

export default Titulo;