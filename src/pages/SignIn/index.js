import React from 'react';
// import { Image } from 'react-native';

import Bg from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  SignImage,
} from './styles';
import logo from '~/assets/img/logoazul.png';

const SignIn = () => {
  return (
    <Bg>
      <Container>
        <SignImage source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => {}}>
          <SignLinkText>Criar conta gratuita.</SignLinkText>
        </SignLink>
      </Container>
    </Bg>
  );
};

export default SignIn;
