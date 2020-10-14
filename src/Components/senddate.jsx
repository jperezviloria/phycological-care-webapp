import React from "react";

export default class Dateee extends React.Component{
    

    state = {
        date: []
    }

    onChangeDate = (e) => {
        this.setState({
            date: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                <input
                name="bookAppointmentClient"  
                onChange={this.onChangeDate}
                type="date"/>
                <button type="submit">enviarrr</button>

                </form>
            </div>
        )
    }

}