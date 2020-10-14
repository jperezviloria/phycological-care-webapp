import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Indexx from "./Components/Index";
import Navbar from "./Components/Navbar";
import SendBookAppointment from "./Components/SendBookAppointment";
import AdminDashboard from "./Components/AdminDashboard"
import SendDate from "./Components/senddate";
import Footer from "./Components/Footer";

import { Background } from "./style/style";

function App() {
  return (
    <Router> 
    <Background className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component = {Indexx}/>
        <Route path = "/administrator" component = {AdminDashboard}/> 
        <Route path = "/book-appointment" component = {SendBookAppointment}/>  
        
        
      </Switch>
      <Footer/>
      {/* <SendDate/>
      <SendBookAppointment/>
      <AdminDashboard/> */}
    </Background>
    </Router>
  );
}

export default App;
