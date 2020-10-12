import React from 'react';
import SendBookAppointment from "./Components/SendBookAppointment";
import AdminDashboard from "./Components/AdminDashboard"
import SendDate from "./Components/senddate";

import { Background } from "./style/style";

function App() {
  return (
    <Background className="App">
      <SendDate/>
      <SendBookAppointment/>
      <AdminDashboard/>
    </Background>
  );
}

export default App;
