import React from "react";


import ViewBookAppointment from "./viewBookAppointment";
import AddAttention from "./AddAttention";
import GetAttention from "./getAttention"

 export default class AdminDashboard extends React.Component{

     render(){
         return (
             <div>
                 <ViewBookAppointment/>
                 {/* <AddAttention/> */}
                 <GetAttention/>
             </div>
         )
     }


 }