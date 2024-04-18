import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, HintText, TextInputStyled} from './customTextInput.style';

export interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: any;
  showError?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({...rest}) => {
  return (
    <Container>
      <TextInputStyled placeholderTextColor={'gray'} {...rest} />
      {rest.showError && rest.error && <HintText>{rest.error}</HintText>}
    </Container>
  );
};

export default CustomTextInput;
