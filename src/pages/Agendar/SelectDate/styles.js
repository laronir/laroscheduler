import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? '10px;' : '50px;'};
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVericalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  flex: 1;
  ${props => !props.enabled && 'opacity: 0.6;'};
  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
