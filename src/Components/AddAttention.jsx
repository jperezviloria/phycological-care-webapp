import React from "react";
import axios from "axios";

import DropzoneAttention from "./DropzoneAttention";

import { FormBookAppointment } from "../style/style";

export default class AddAttention extends React.Component {

    state = {
        attention: []
    }

    onChangeIdAttention = (e) => {
        this.setState({
            idAttention: e.target.value
        });
    };

    onChangeNameAttention = (e) => {
        this.setState({
            nameAttention: e.target.value
        });
    };

    onChangeimageLinkAttention = (e) => {
        this.setState({
            imageLinkAttention: e.target.value
        });
    };

    onSubmitAttention = async (e) => {
        const response = await axios.post(`/attention`, {
            nameAttention: this.state.nameAttenttion,
            imageLinkAttention: this.state.imageLinkAttention


        });
        this.setState({
            nameAttention: '',
            imageLinkAttention: ''
        });
    }


    render() {
        return (
            <div>
                <FormBookAppointment onSubmit={this.onSubmitAttention}>
                    <input
                        type="text"
                        name="nameAttention"
                        placeholder="Attention Name"
                        onChange={this.onChangeNameAttention} />
                    <DropzoneAttention idAttention={this.onChangeIdAttention}/>                       
                    <button type="submit">SEND FORM</button>    
                </FormBookAppointment>
            </div>
        )
    }
}