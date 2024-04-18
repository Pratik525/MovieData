import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonStyled, TitleText} from './customButton.style';

export interface CustomButtonInputProps extends TouchableOpacityProps {
  title?: string;
}

const CustomButton: React.FC<CustomButtonInputProps> = ({...rest}) => {
  return (
    <ButtonStyled {...rest}>
      <TitleText>{rest.title}</TitleText>
    </ButtonStyled>
  );
};

export default CustomButton;
