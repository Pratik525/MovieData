import styled from 'styled-components/native';
import {CustomTextInputProps} from '.';
import { I18nManager } from 'react-native';

export const Container = styled.View`
  margin-horizontal: 20px;
`;

export const TextInputStyled = styled.TextInput`
  border-width: 2px;
  border-color: ${(props: CustomTextInputProps) =>
    props.error ? 'red' : '#ddd'};
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  color: white;
  font-weight: 500;
  text-align :  ${I18nManager.isRTL ? 'right' : 'left'};
`;

export const HintText = styled.Text`
  width: 100%;
  color: #cccccc;
  margin-top: 10px;
`;
