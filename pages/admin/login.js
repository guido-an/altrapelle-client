import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthService from '../../services/authService';
import styled from 'styled-components';
import ContainerApp from '../../components/atoms/ContainerApp';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();
  const service = new AuthService();

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await service.login(email, password);
      router.push('/admin/ordini');
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.errorMessage);
    }
    setLoading(false);
  }

  return (
    <ContainerApp>
      <Form onSubmit={submitHandler}>
        <Title>Login</Title>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          required={true}
          value={email}
          handleChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
        />
        <Button margin="40px auto 0">{loading ? 'Loading' : 'Login'}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </ContainerApp>
  );
}

const Form = styled.form`
  padding: 10vh 0 40vh;
  @media (min-width: 968px) {
    padding: 10vh 20vw 40vh;
  }
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
`;
const Error = styled.p`
  text-align: center;
`;
