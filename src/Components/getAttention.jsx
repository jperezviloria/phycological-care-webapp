import React from "react";
import axios from "axios";
import Dropzone from "./DropzoneAttention";

import { ContactFormCard } from "../style/style";


 export default class AdminDashboard extends React.Component{

     state = {
         attention: [],
     }

     componentDidMount(){
         axios.get(`/attention/get_attention`)
         .then(response => {
             console.log(response);
             if(response.status )
             this.setState({ attention: response.data});
         });
     }

     render(){
         return (
            <div>
            {
                this.state.attention.map(attention =>
                    //the condition will here to show only the enable works 

                    <ContactFormCard>
                        <p>{attention.idAttention}</p>
                        <h3>{attention.nameAttention}</h3>
                        <img src={attention.imageLinkAttention} alt=""/>
                        <Dropzone idAttention={attention.idAttention}/>         
                    </ContactFormCard>
                )
            }
        </div>
         )
     }


 }