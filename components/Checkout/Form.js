import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
export default function Form ({ 
    handleChange, 
    form, 
    newsLetterConsent, 
    setNewsletterConsent, 
    handleSubmit }) {
    return(
        <MyForm onSubmit={handleSubmit}>
             <InputsContainer>
                <div>
                  <Label htmlFor="firstName">* Nome</Label>
                   <Input 
                   type="text" 
                   name="firstName" 
                   value={form.firstName}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
                <div>
                   <Label htmlFor="lastName">* Cognome</Label>
                    <Input 
                     type="text" 
                     name="lastName" 
                     value={form.lastName}
                     handleChange={handleChange}
                     required={true}
                   />
                </div>
             </InputsContainer>
             <InputsContainer>
                <div>
                   <Label htmlFor="vatOrFiscalCode">* P.IVA / Codice Fiscale</Label>
                   <Input 
                   type="text"  
                   name="vatOrFiscalCode" 
                   value={form.vatOrFiscalCode}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
                <div>
                  <Label htmlFor="address">* Indirizzo</Label>
                  <Input 
                   type="text" 
                   name="address" 
                   value={form.address}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
             </InputsContainer>
             <InputsContainer>
                <div>
                   <Label htmlFor="city">* Città</Label>
                   <Input 
                   type="text" 
                   name="city" 
                   value={form.city}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
                <div>
                  <Label htmlFor="province">* Provincia</Label>
                  <Input 
                   type="text" 
                   name="province" 
                   value={form.province}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
                <div>
                  <Label htmlFor="zipCode">* C.A.P.</Label>
                  <Input 
                   type="text" 
                   name="zipCode" 
                   value={form.zipCode}
                   handleChange={handleChange}
                   required={true}
                   />
                </div>
             </InputsContainer>
             <InputsContainer>  
               <div>
                  <Label htmlFor="telephone">* Telefono</Label>
                   <Input 
                   type="text" 
                   placeholder="* Telefono" 
                   name="telephone" 
                   value={form.telephone}
                   handleChange={handleChange}
                   required={true}
                   />
               </div>
               <div>
                  <Label htmlFor="email">* Email</Label>
                  <Input 
                   type="email" 
                   name="email" 
                   value={form.email}
                   handleChange={handleChange}
                   required={true}
                   />
               </div>
             </InputsContainer>
               <>
                 <Label htmlFor="additionalNotes">Note aggiuntive</Label>
                  <Input 
                  type="textarea" 
                  name="additionalNotes" 
                  value={form.additionalNotes}
                  handleChange={handleChange}
                  height="80px"
                  />
               </>
             <NewsLetterContainer> 
               <Span>Iscrivimi alla newsletter</Span>
               <Input 
               type="checkbox" 
               name="newsLetterConsent" 
               value={newsLetterConsent}
               checked={newsLetterConsent}
               handleChange={() => setNewsletterConsent(!newsLetterConsent)}
               width="15px"
               />
             </NewsLetterContainer>
             <button>daje</button>
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

  const MyForm = styled.form`
     width: 100%;
      :input[type="textarea"]{
        display: none;
      }
   `
  const InputsContainer = styled.div`
     @media(min-width: 968px){
         display: flex;
           div {
               width: 50%;
               margin: 5px;
           }
     }
   `
  const Label = styled.label`
     color: ${({ theme }) => theme.colors.greyText};
     font-size: 15px;
   `

  const NewsLetterContainer = styled.div`
      width: 100%;
       input {
           position: relative;
           top: 15px;
       }
   `
  const Span = styled.span`
     color: ${({ theme }) => theme.colors.greyText};
   `
