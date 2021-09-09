import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from '../atoms/Input'

// width: ${({ width }) => width}; example

const MyForm = styled.form`
   
`

// firstName: '',
// lastName: '',
// vatOrFiscalCode: '',
// address: '',
// city: '',
// province: '',
// zipCode: '',
// telephone: '',
// email: '',


const Form = ({ handleChange }) => {
    return(
        <MyForm>
            <Input 
             type="text" 
             placeholder="* Nome" 
             name="firstName" 
             handleChange={handleChange}
             required={true}/>
            <Input 
             type="text" 
             placeholder="* Cognome" 
             name="lastName" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* P.IVA / Codice Fiscale" 
             name="vatOrFiscalCode" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Indirizzo" 
             name="address" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Città" 
             name="city" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Provincia" 
             name="province" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* C.A.P." 
             name="zipCode" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Telefono" 
             name="telephone" 
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Email" 
             name="email" 
             handleChange={handleChange}/>
        </MyForm>
    )
}

  const { func } = PropTypes
  Form.propTypes = {
      handleChange: func.isRequired
  }


export default Form

