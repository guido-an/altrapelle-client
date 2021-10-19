import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
export default function Form ({
  handleChange,
  form,
  newsLetterConsent,
  setNewsletterConsent,
  handleSubmit
}) {
  return (
    <MyForm onSubmit={handleSubmit}>
      <InputsContainer>
        <div>
          <Label htmlFor='firstName'>* Nome</Label>
          <Input
            type='text'
            name='firstName'
            value={form.firstName}
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor='lastName'>* Cognome</Label>
          <Input
            type='text'
            name='lastName'
            value={form.lastName}
            handleChange={handleChange}
            required
          />
        </div>
      </InputsContainer>
      <InputsContainer>
        <div>
          <Label htmlFor='vatOrFiscalCode'>* P.IVA / Codice Fiscale</Label>
          <Input
            type='text'
            name='vatOrFiscalCode'
            value={form.vatOrFiscalCode}
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor='address'>* Indirizzo</Label>
          <Input
            type='text'
            name='address'
            value={form.address}
            handleChange={handleChange}
            required
          />
        </div>
      </InputsContainer>
      <InputsContainer>
        <div>
          <Label htmlFor='city'>* Città</Label>
          <Input
            type='text'
            name='city'
            value={form.city}
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor='province'>* Provincia</Label>
          <Input
            type='text'
            name='province'
            value={form.province}
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor='zipCode'>* C.A.P.</Label>
          <Input
            type='text'
            name='zipCode'
            value={form.zipCode}
            handleChange={handleChange}
            required
          />
        </div>
      </InputsContainer>
      <InputsContainer>
        <div>
          <Label htmlFor='telephone'>* Telefono</Label>
          <Input
            type='text'
            placeholder='* Telefono'
            name='telephone'
            value={form.telephone}
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor='email'>* Email</Label>
          <Input
            type='email'
            name='email'
            value={form.email}
            handleChange={handleChange}
            required
          />
        </div>
      </InputsContainer>
      <>
        <Label htmlFor='additionalNotes'>Note aggiuntive</Label>
        <Input
          type='textarea'
          name='additionalNotes'
          value={form.additionalNotes}
          handleChange={handleChange}
          height='80px'
        />
      </>
      <CheckBoxContainer>
        <Input
          type='checkbox'
          name='privacy'
          value=''
          width='15px'
          required
        />
        <P>* Ho letto e accettato <Link href='/condizioni-generali-di-vendita'>termini e condizioni</Link> del sito web.</P>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <Input
          type='checkbox'
          name='newsLetterConsent'
          value={newsLetterConsent}
          checked={newsLetterConsent}
          handleChange={() => setNewsletterConsent(!newsLetterConsent)}
          width='15px'
        />
        <P>Acconsento al trattamento dei miei dati personali per finalità di marketing diretto al fine di ricevere comunicazioni commerciali e promozioni dirette.</P>
      </CheckBoxContainer>
      <ButtonContainer>
        <Button width='100%' margin='40px auto 0'>Procedi con il pagamento</Button>
      </ButtonContainer>
    </MyForm>
  )
}

const ButtonContainer = styled.div`
    width: 400px;
    margin: 0 auto 80px;
`

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

const CheckBoxContainer = styled.div`
      margin: 0 auto;
      text-align: center;
        input {
            position: relative;
            top: 15px;
            right: 10px;
        }
      @media(min-width: 968px){
          width: 50%;
          margin: 0 auto;
      } 
   `
const P = styled.span`
     color: ${({ theme }) => theme.colors.greyText};
   `
