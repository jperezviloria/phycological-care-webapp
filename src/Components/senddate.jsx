import React from "react";

export default class Dateee extends React.Component{
    

    state = {
        datee: []
    }

    onChangeDatee = (e) => {
        this.setState({
            datee: e.target.value
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
                onChange={this.onChangeDatee}
                type="date"/>
                <button type="submit">enviarrr</button>

                </form>
            </div>
        )
    }

}