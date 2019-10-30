import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data, onCancel }) => {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  const { name, avatar } = data.provider;

  return (
    <Container cancelado={!!data.canceled_at} past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: avatar
              ? avatar.url
              : `https://api.adorable.io/avatars/50/${name}.png`,
          }}
        />
        <Info>
          <Name>{name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {/* Só é possível cancelar datas que não passaram
       ou que o horario seja superior há 2 horas da data atual */}

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f65c57" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;

Appointment.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onCancel: PropTypes.func.isRequired,
};
