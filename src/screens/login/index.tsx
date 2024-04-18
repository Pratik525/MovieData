// LoginScreen.tsx
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import LanguageChangeIcon from '../../components/languageChangeIcon';
import {MainContainer, TitleText} from './login.style';
import {useLogin} from './useLogin';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/regex';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {t} = useTranslation();
  const {handleUserSubmit} = useLogin();

  return (
    <MainContainer>
      <LanguageChangeIcon />
      <TitleText>{t('login')}</TitleText>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            autoFocus
            placeholder={t('email')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email?.message}
          />
        )}
        name="email"
        rules={{
          required: t('emailIsRequired'),
          pattern: {value: EMAIL_REGEX, message: t('emailValidation')},
        }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder={t('password')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={errors.password?.message}
            showError
          />
        )}
        name="password"
        rules={{
          required: t('passwordIsRequired'),
          pattern: {
            value: PASSWORD_REGEX,
            message: t('passwordValidation'),
          },
        }}
        defaultValue=""
      />
      <CustomButton
        disabled={!isValid}
        title={t('login')}
        onPress={handleSubmit(handleUserSubmit)}
      />
    </MainContainer>
  );
};

export default LoginScreen;
