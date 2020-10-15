import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { DashboardAdminStyle, Background } from "../style/style";


import ViewBookAppointment from "./viewBookAppointment";
import AddAttention from "./AddAttention";
import GetAttention from "./getAttentionAdmin"
import NavbarAdmin from "./NavbarAdmin";

 export default class AdminDashboard extends React.Component{

     render(){
         return (
            <Router> 
              <NavbarAdmin/>
              <Switch>
                <Route path="/administrator/view-forms" exact component = {ViewBookAppointment}/>
                <Route path = "/administrator/configuration-service" component = {GetAttention}/> 
              </Switch>
{/*            
             <DashboardAdminStyle>
                 <div>
                    <ViewBookAppointment/>
                 </div>
                 <div>
                    <GetAttention/>
                 </div>
             </DashboardAdminStyle> */}
             </Router>
         )
     }


 }