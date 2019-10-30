import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

const Confirm = () => {
  return <Background />;
};

export default Confirm;

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar',

  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
