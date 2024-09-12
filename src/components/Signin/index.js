import React from 'react'
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
    Text
 } from './SigninElements'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/"> SkateFlow </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1> Faça Login de seu perfil </FormH1>
                    <FormLabel htmlFor='for'> Email </FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'> Senha </FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'> Continue </FormButton>
                    <Text> Esqueceu sua senha? </Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default SignIn