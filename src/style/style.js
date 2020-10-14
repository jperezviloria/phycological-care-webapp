import styled from "styled-components";


export const Background = styled.div `
    background-color: #fbf7f0;
    font-family: 'Telex', sans-serif;
`

export const FormBookAppointment = styled.form `

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
export const BorderAttention = styled.div `

    display: grid;
    justify-content: center;
    background-color: #ffe05d;
    margin: 0 auto;
    
    div{
        &.Listattentions{
            
            

            display: grid;
            justify-content: center;
            grid-template-columns: repeat(3, 30%);
            div{
                width: 180px;
                height: 300px;
                margin: 20px ;
                
            }
            
        }
    }
    h1{
        text-align: center;
    }
`

export const ContactFormCard = styled.div `
    border: 5px solid #f39233;
    margin: 20px 0;
    border-radius: 30px;
    width: 60%;
    background-color: #fff5ea;
    display: grid;
    justify-items: center;
    margin: 0 auto;
    
    img{
        width: 100px;
        height: 100px;
        border-radius: 300px;
        border: 5px solid #373a40;
    }
    p{
        font-size: 12px;
        
    }
`
export const ContactClientCard = styled.div `
    
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-items: center;
    margin: 10px auto;
    img{
        width: 150px;
        height: 150px;
        border-radius: 300px;
        border: 5px solid #373a40;
    }
`

export const DashboardAdminStyle = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 50%);
`

export const PreDropZone = styled.p `
    border: 3px solid purple;
    background-color: #d6d2c4;
    width: 60%;
    margin: 30px auto;
    padding: 5px 10px;
    text-align: center;
    border-radius:30px;

`

export const PostDropZone = styled.p `
    border: 3px solid green;
    background-color: #fff0f0;
    width: 60%;
    margin: 30px auto;
    padding: 5px 10px;
    text-align: center;
    border-radius:30px;
`

export const Navbar = styled.div `
    background-color: #ee6f57;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 30px 0;
    
    a{
        text-decoration: none;
        color: black;
        padding: 3px 10px;
        background-color: #f6f5f5;
        border:3px solid #f1e189;
        border-radius: 20px; 

    }
    
`
export const FooterStyle = styled.div `
    background-color: #ee6f57;
    display: grid;
    
    justify-content: center;
    padding: 10px 0;
    div{

        &.logo{
            display: grid; 
        justify-content: center;            
            img{
                
                width: 80px;
            }
        }
        &.adress{
            margin: 0 auto; 
            a{
                img{
                    width: 30px;
                    margin: 10px;
                } 
            }
        }
    }

    
`
export const Indexx = styled.div `
    
    display: grid;
    
    justify-items: center;
    padding: 30px 0;

    p{
        width: 60%;
        font-size: 19px;
    }
    img{
        width: 100px;
        margin-top: 30px;
    }
    
    a{
        text-decoration: none;
        color: black;
        font-size: 22px;
        padding: 10px 40px;
        background-color: #f6f5f5;
        border:3px solid #f1e189;
        border-radius: 20px; 

    }
    
`