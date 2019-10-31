import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/components/Appointment';
import api from '~/services/api';

const Dashboard = ({ isFocused }) => {
  const [appointments, setAppointments] = useState([]);

  const carregarAppointments = async () => {
    const res = await api.get('appointments');
    setAppointments(res.data);
  };

  useEffect(() => {
    if (isFocused) {
      carregarAppointments();
    }
  }, [isFocused]);

  const cancelApointment = async id => {
    try {
      const res = await api.delete(`appointments/${id}`);

      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: res.data.canceled_at,
              }
            : appointment
        )
      );
    } catch (err) {
      Alert.alert('Erro', 'Falha ao cancelar agendamento.');
    }
  };

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              onCancel={() => cancelApointment(item.id)}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
export default withNavigationFocus(Dashboard);

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
