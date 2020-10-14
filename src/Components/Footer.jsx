import React from "react";

import { FooterStyle } from "../style/style";


function Footer(){
    return (
        <FooterStyle>
            <div className="logo">
                <img src="https://i.imgur.com/Ih8XMS3.png" alt=""/>
            </div>
            <div className="adress">

            <a href="https://www.linkedin.com/in/julio-perez-viloria"><img src="https://ecoprintq.com.ar/wp-content/uploads/2020/04/linkedin-logo.png" alt=""/></a>
            <a href="https://github.com/jperezviloria"><img src="https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png" alt=""/></a>
            <a href="https://www.instagram.com/julioperez.dev/?hl=es-la"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""/></a>
            </div>
            <p>© 2020 Protobot Inc. All rights reserved</p>
        </FooterStyle>
    )
}

export default Footer;