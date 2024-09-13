import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  LoginButton,
  Text
} from './SigninElements';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Inicialize o useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
    } else {
      setErrorMessage('');
      // Redirecione para a página de sucesso
      navigate('/success');
    }
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">SkateFlow</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1> Crie sua conta ou faça Login </FormH1>
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
            <FormLabel htmlFor='confirmPassword'>Repetir Senha</FormLabel>
            <FormInput 
              type='password' 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            {errorMessage && <p className="error-text">{errorMessage}</p>}
            <FormButton type='submit'>Continue</FormButton>
            <LoginButton>Fazer Login</LoginButton>
            <Text>Esqueceu sua senha?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
