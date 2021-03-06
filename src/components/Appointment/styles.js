import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${props => props.past && 'opacity: 0.6;'};
  ${props => props.cancelado && 'display:none;'};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;
