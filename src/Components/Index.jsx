import React from "react";
import { Indexx } from "../style/style";
import Attention from "./getAttention";

function Index(){
    return (
        <div>
            <Indexx>
            <h1>Welcome to Psycological Care Website</h1>
            <p>Our group have the best attentions around the world, we have a most competitive price to pay on Paypal and you can take a Book Appointment here</p>
            <a href="/book-appointment">sent</a>
            <img src="https://www.flaticon.es/svg/static/icons/svg/764/764246.svg" alt=""/>
            </Indexx>
            
            <Attention/>
        </div>
    )
}

export default Index;