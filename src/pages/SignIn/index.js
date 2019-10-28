import React from 'react';
import { Text } from 'react-native';

import Bg from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

const SignIn = () => {
  return (
    <Bg>
      <Text>SignIn</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Botao</Button>
    </Bg>
  );
};

export default SignIn;
