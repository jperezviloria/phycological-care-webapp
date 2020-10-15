import React, { useState } from 'react'
import styled from "styled-components";

import Modal from './Modal'


const Boton = styled.button`
    border-radius: 20px;
    border: 4px solid #127681;
    padding: 6px 15px;
    margin-top:30px;
    margin-bottom: 30px;
    font-weight: 900;
  @media only screen and (min-width: 310px) {
    padding: 10px 50px;
    margin-top:40px;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 480px) {
    padding: 10px 100px;
    margin-top:50px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 768px) {
    
    padding: 10px 200px;
    
    }
`


const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <div>
      <Boton type="submit"  onClick={openModal}  >ENVIAR FORMULARIO</Boton>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default Button