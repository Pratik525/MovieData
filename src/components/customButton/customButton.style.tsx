import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity`
  margin: 20px;
  height: 40px;
  background-color: ${props => (props.disabled ? '#ccc' : 'white')};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TitleText = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;
