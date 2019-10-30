import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? '10px;' : '50px;'};
`;
