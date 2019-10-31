import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Avatar, Name, Time, ConfirmarButton } from './styles';
import api from '~/services/api';

const Confirm = ({ navigation }) => {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const timeFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );
  console.tron.warn(time);
  console.tron.warn(timeFormatted);

  const handleMakeAppointment = async () => {
    try {
      await api.post('appointments', {
        provider_id: provider.id,
        date: time,
      });
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Erro',
        'Erro ao fazer agendamento. Verifique a sua conexão!'
      );
    }
  };

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{timeFormatted}</Time>
        <ConfirmarButton onPress={handleMakeAppointment}>
          Confirmar Agendamento
        </ConfirmarButton>
      </Container>
    </Background>
  );
};

export default Confirm;

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar Agendamento',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

Confirm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
