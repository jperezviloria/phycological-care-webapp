import React from "react";

import { DashboardAdminStyle } from "../style/style";


import ViewBookAppointment from "./viewBookAppointment";
import AddAttention from "./AddAttention";
import GetAttention from "./getAttentionAdmin"

 export default class AdminDashboard extends React.Component{

     render(){
         return (
             <DashboardAdminStyle>
                 <div>
                    <ViewBookAppointment/>
                 </div>
                 <div>
                    <GetAttention/>
                 </div>
             </DashboardAdminStyle>
         )
     }


 }