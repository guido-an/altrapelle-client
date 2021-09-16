import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from '../atoms/Input'

// width: ${({ width }) => width}; example

const MyForm = styled.form`
   
`


const Form = ({ 
    handleChange, 
    form, 
    newsLetterConsent, 
    setNewsletterConsent, 
    handleSubmit }) => {
    return(
        <MyForm onSubmit={handleSubmit}>
            <Input 
             type="text" 
             placeholder="* Nome" 
             name="firstName" 
             value={form.firstName}
             handleChange={handleChange}
             required={true}/>
            <Input 
             type="text" 
             placeholder="* Cognome" 
             name="lastName" 
             value={form.lastName}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* P.IVA / Codice Fiscale" 
             name="vatOrFiscalCode" 
             value={form.vatOrFiscalCode}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Indirizzo" 
             name="address" 
             value={form.address}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Città" 
             name="city" 
             value={form.city}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Provincia" 
             name="province" 
             value={form.province}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* C.A.P." 
             name="zipCode" 
             value={form.zipCode}
             handleChange={handleChange}/>
            <Input 
             type="text" 
             placeholder="* Telefono" 
             name="telephone" 
             value={form.telephone}
             handleChange={handleChange}/>
            <Input 
             type="email" 
             placeholder="* Email" 
             name="email" 
             value={form.email}
             handleChange={handleChange}/>
             Newsletter consent
            <Input 
             type="checkbox" 
             name="newsLetterConsent" 
             value={newsLetterConsent}
             checked={newsLetterConsent}
             handleChange={() => setNewsletterConsent(!newsLetterConsent)}/>
          <button>pagamento</button>
        </MyForm>
    )
}

  const { func, bool, object } = PropTypes
  Form.propTypes = {
      handleChange: func.isRequired,
      newsLetterConsent: bool.isRequired,
      setNewsletterConsent: func.isRequired,
      form: object.isRequired
  }


export default Form

