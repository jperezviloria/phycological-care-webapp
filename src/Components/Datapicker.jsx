import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Datapicker extends React.Component {

    render(){
    return (
        <div>
        
        <DatePicker
            selected={new Date()}
            dateFormat='dd-MM-yyyy'
            //filterDate={date => date.getDay() !== '2020/10/13'}
            //excludeDates={[new Date(), subDay(new Date(), 2)]} 
            minDate={new Date()}
             />
        </div>
    )}
};

