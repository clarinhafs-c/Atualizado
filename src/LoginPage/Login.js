// Login.js
import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    navigate('/login'); // Exemplo de redirecionamento
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">SkateFlow</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Faça Login</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput 
              type='email' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <FormInput 
              type='password' 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <FormButton type='submit'>Entrar</FormButton>
            <Text>Esqueceu sua senha?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;
