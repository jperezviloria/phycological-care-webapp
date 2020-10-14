import React from "react";
import axios from "axios";

import { ContactClientCard, ContactFormCard } from "../style/style";


 export default class AdminDashboard extends React.Component{

     state = {
         bookAppointment: [],
     }

     componentDidMount(){
         axios.get(`/client/getall_clients`)
         .then(response => {
             console.log(response);
             if(response.status )
             this.setState({ bookAppointment: response.data});
         });
     }

     render(){
         return (
            <ContactClientCard>
            {
                this.state.bookAppointment.map(bookAppointment =>
                    //the condition will here to show only the enable works 

                    <ContactFormCard>
                        <h3>{bookAppointment.nameClient}</h3>
                        <p>{bookAppointment.bookAppointmentClient}</p>
                        <p>{bookAppointment.contactMethod}</p>
                        <p>{bookAppointment.bookAppointmentCost + " Dolares"}</p>
                        <p>{bookAppointment.yearsClient + " Anios"}</p>
                    
                    </ContactFormCard>
                )
            }
        </ContactClientCard>
         )
     }


 }