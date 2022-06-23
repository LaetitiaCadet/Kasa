import React from "react";
import logo from '../assets/logoFooter.png';


function Footer(){
    return (
        <div>
            <footer>
                <img src={logo} className="Footer-logo" alt="logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer;