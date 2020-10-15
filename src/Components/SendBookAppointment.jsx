import React from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "./Button";


import Datapicker from "./Datapicker";

import { FormBookAppointment } from "../style/style";

export default class SendBookAppointment extends React.Component {

    state = {
        client: []
    }



    onChangeNameClient = (e) => {
        this.setState({
            nameClient: e.target.value
        });
    };

    onChangeYearsClient = (e) => {
        this.setState({
            yearsClient: e.target.value
        });
    };

    onChangeContactMethod = (e) => {
        this.setState({
            contactMethod: e.target.value
        });
    };

    onChangeBookAppointmentClient = (e) => {
        this.setState({
            bookAppointmentClient: e.target.value
        });
    };

    onChangeNameServiceClient = (e) => {
        this.setState({
            nameService: e.target.value

        });
    };

    onChangeBookAppointmentCost = (e) => {
        this.setState({
            bookAppointmentCost: e.target.value

        });
    };

    onSubmitClient = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/client/save_client`, {
            nameClient: this.state.nameClient,
            yearsClient: this.state.yearsClient,
            contactMethod: this.state.contactMethod,
            bookAppointmentClient: this.state.bookAppointmentClient,
            nameService: this.state.nameService,
            bookAppointmentCost: this.state.bookAppointmentCost

        });
        this.setState({
            nameClient: '',
            yearsClient: '',
            contactMethod: '',
            bookAppointmentClient: '',
            nameService: '',
            bookAppointmentCost: ''
        });
    }


    render() {
        return (
            <div>
                <Datapicker
                        type="date"
                        name="bookAppointmentClient"
                        onChange={this.onChangeBookAppointmentClient} />
                <FormBookAppointment  onSubmit={this.onSubmitClient}>
                    <input
                        
                        type="text"
                        name="nameClient"
                        placeholder="Full Name"
                        onChange={this.onChangeNameClient} />

                    <input
                        
                        type="number"
                        name="yearsClient"
                        placeholder="Year"
                        onChange={this.onChangeYearsClient} />

                    <select
                        
                        name="contactMethod"
                        onChange={this.onChangeContactMethod}>

                        <option value="Deafault" id="ID">
                            Method
                        </option>
                        <option value="Video Call" id="videoCall">
                            Video Call
                        </option>
                        <option value="Phone Call" id="phoneCall">
                            Phone Call
                        </option>
                        <option value="Text Message" id="textMessage">
                            Text Message
                        </option>
                        <option value="Emails" id="emails">
                            Emails
                        </option>

                    </select>
                    {/* <input
                        type="date"
                        name="bookAppointmentClient"
                        onChange={this.onChangeBookAppointmentClient}>
                    
                    </input>        */}
                    <Datapicker
                        type="date"
                        name="bookAppointmentClient"
                        onChange={this.onChangeBookAppointmentClient} />
                    <input
                        
                        type="text"
                        name="bookAppointmentCost"
                        placeholder="Cost"
                        onChange={this.onChangeBookAppointmentCost} />
                    {/* <button type="submit">SEND FORM</button> */}
                    <Button/>
                </FormBookAppointment>
                <Popup trigger={<button> Send</button>} position="right center">
                    <div>
                        <img src="https://www.flaticon.es/svg/static/icons/svg/3587/3587986.svg" alt="" />
                        <p>Book Appointment have been saved</p>
                        <a href="/"><button type="submit">Go to home</button></a>
                    </div>
                </Popup>
            </div>
        )
    }
}