import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import api from '~/services/api';

import { Container, Hour, HourList, Title } from './styles';

const SelectDate = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    const checkAvailability = async () => {
      try {
        const res = await api.get(`providers/${provider.id}/available`, {
          params: {
            date: date.getTime(),
          },
        });
        setTime(res.data);
      } catch (err) {
        Alert.alert(
          'Erro',
          'Erro ao buscar horários disponíveis. Verifique a sua conexão!'
        );
      }
    };
    checkAvailability();
  }, [date, provider.id]);

  const handleSelectHour = data => {
    navigation.navigate('Confirm', {
      provider,
      time: data,
    });
  };

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={time}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => {
                handleSelectHour(item.value);
              }}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectDate;

SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

SelectDate.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
