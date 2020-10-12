import styled from "styled-components";


export const Background = styled.div`
    background-color: #fbf7f0;
` 

export const FormBookAppointment = styled.form`

    display: grid;
    grid-template-columns: repeat(1, 30%);
    justify-content: center;
    

    input, select{
        margin: 10px 0 10px 0;
        padding: 10px 10px;
        border: 3px solid #d9e4dd;
        border-radius: 5px;
        background-color: #f6f6f6;
        color: #4c4c4c;
        
    }
`

export const ContactFormCard = styled.div`
    border: 3px solid black;
`