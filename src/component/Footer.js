import React, { Fragment } from "react";

const Footer = (props) => {
    return(
        <>
            <hr/>
            <center>
                <h2>&copy; Contact us {props.year}</h2>
            </center>
        </>
    )
}

export default Footer;