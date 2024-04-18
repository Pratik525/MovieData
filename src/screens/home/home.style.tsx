import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = (Dimensions.get('window').width - 30) / 2;

export const ItemContainer = styled.View`
  margin: 5px;
  backgound-color: black;
  width: ${width}px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px;
  justify-content: center;
  background-color: #1c4e80;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
`;

export const Container = styled.View`
  padding: 5px;
  background-color: black;
`;

export const Thumbnail = styled.Image`
  width: ${width}px;
  height: ${width * 1.5}px;
`;

export const TitleText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
