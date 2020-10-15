import React from "react";

import { Navbar } from "../style/style";


function NavbarAdmin(){
    return (
        <Navbar>
            <a href="/administrator/view-forms">View Form</a>
            <a href="/administrator/configuration-service">Configuration Service</a>
        </Navbar>
    )
}

export default NavbarAdmin;