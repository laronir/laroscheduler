import React from 'react';
import PropTypes from 'prop-types';
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

const SignIn = ({ navigation }) => {
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
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita.</SignLinkText>
        </SignLink>
      </Container>
    </Bg>
  );
};

export default SignIn;

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
