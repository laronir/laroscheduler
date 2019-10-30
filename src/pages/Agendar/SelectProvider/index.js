import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

const SelectProvider = () => {
  return (
    <Background>
      <Text />
    </Background>
  );
};

export default SelectProvider;

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o Professor',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
