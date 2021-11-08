import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import axios from 'axios';

let service = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    email: '',
    address: '',
    zipCode: '',
    city: '',
    province: '',
    additionalNotes: '',
  });

  const [request, setRequest] = useState({
    testers: false,
    brochure: false,
    info: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.post('/user/email/request', {
        form,
        request,
      });
      if (response.status === 200) {
        alert('Richiesta inviata con successo!');
      }
      setForm({
        fullName: ' ',
        businessName: '',
        email: '',
        address: '',
        zipCode: '',
        city: '',
        province: '',
        additionalNotes: '',
      });
    } catch (err) {
      alert('Qualcosa è andato storto. Riprova o mettiti in contatto con noi!');
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>Richiesta prodotti e informazioni</h2>
      <form onSubmit={handleSubmit}>
        <Label htmlFor='fullName'>* Nome e cognome</Label>
        <Input
          type='text'
          name='fullName'
          handleChange={handleChange}
          required={true}
          value={form.fullName}
        />
        <Label htmlFor='businessName'>* Ragione sociale</Label>
        <Input
          type='text'
          name='businessName'
          handleChange={handleChange}
          required={true}
          value={form.businessName}
        />
        <Label htmlFor='email'>* Email</Label>
        <Input
          type='email'
          name='email'
          handleChange={handleChange}
          required={true}
          value={form.email}
        />
        <Label htmlFor='address'>* Indirizzo</Label>
        <Input
          type='text'
          name='address'
          handleChange={handleChange}
          required={true}
          value={form.address}
        />
        <Label htmlFor='zipCode'>* CAP</Label>
        <Input
          type='text'
          name='zipCode'
          handleChange={handleChange}
          required={true}
          value={form.zipCode}
        />
        <Label htmlFor='city'>* Città</Label>
        <Input
          type='text'
          name='city'
          handleChange={handleChange}
          required={true}
          value={form.city}
        />
        <Label htmlFor='province'>* Provincia</Label>
        <Input
          type='text'
          name='province'
          handleChange={handleChange}
          required={true}
          value={form.province}
        />
        <Label htmlFor='additionalNotes'>Richieste aggiuntive</Label>
        <Input
          type='textarea'
          name='additionalNotes'
          handleChange={handleChange}
          required={false}
          value={form.additionalNotes}
          width='100%'
          height='80px'
        />
        <p>Cosa desideri ricevere?</p>
        <div>
          <Input
            type='checkbox'
            name='testers'
            handleChange={() =>
              setRequest({ ...request, testers: !request.testers })
            }
            value={request.testers}
            width='15px'
          />
          <Span>Campioni</Span>
        </div>
        <div>
          <Input
            type='checkbox'
            name='brochure'
            handleChange={() =>
              setRequest({ ...request, brochure: !request.brochure })
            }
            value={request.brochure}
            width='15px'
          />
          <Span>Brochure INFORMATIVA digitale</Span>
        </div>
        <div>
          <Input
            type='checkbox'
            name='info'
            handleChange={() => setRequest({ ...request, info: !request.info })}
            value={request.info}
            width='15px'
          />
          <Span>Informazioni sui prodotti</Span>
        </div>
        <BoringText>
          - I dati richiesti sono necessari per l’elaborazione della richiesta.
          L’inserimento dei dati è facoltativo.
        </BoringText>
        <BoringText>
          - Il conferimento parziale dei dati potrebbe rendere impossibile la
          prestazione dei servizi richiesti.
        </BoringText>
        <BoringText>
          - I dati indirizzo, CAP, Città e Provincia sono necessari al fine di
          elaborare la richiesta di spedizione di campioni.
        </BoringText>
        <BoringText>
          - Procedendo all'invio della richiesta, si dichiara di aver letto e
          accettato l‘
          <Link href='/privacy-policy'>informativa sul trattamento dati</Link>.
        </BoringText>
        <Button margin='40px auto 20px'>Invia richiesta</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  h2 {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 0.9rem;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.colors.greyText};
  position: relative;
  bottom: 15px;
  left: 5px;
  font-weight: 500;
  font-size: 0.9rem;
`;
const BoringText = styled.p`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 0.875rem;
`;
