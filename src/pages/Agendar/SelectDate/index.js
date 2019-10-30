import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

const SelectDate = () => {
  return <Background />;
};

export default SelectDate;

SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('SelectProvider')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
