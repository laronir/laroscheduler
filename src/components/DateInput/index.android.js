import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DatePickerAndroid } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  const handlePicker = async () => {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
      minDate: new Date(),
    });
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  };

  return (
    <Container>
      <DateButton onPress={handlePicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
};

export default DateInput;

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
