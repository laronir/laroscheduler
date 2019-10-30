import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/components/Appointment';
import api from '~/services/api';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const carregarAppointments = async () => {
    const res = await api.get('appointments');
    setAppointments(res.data);
  };

  useEffect(() => {
    carregarAppointments();
  }, []);

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

export default Dashboard;

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
