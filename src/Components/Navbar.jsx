import React from "react";

import { Navbar } from "../style/style";


function Navbarr(){
    return (
        <Navbar>
            <a href="/">Index</a>
            <a href="/book-appointment">Contact me</a>
            <a href="/administrator">Sign in</a>
        </Navbar>
    )
}

export default Navbarr;