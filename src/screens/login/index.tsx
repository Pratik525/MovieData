// LoginScreen.tsx
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import base64 from 'react-native-base64';
import {useDispatch} from 'react-redux';
import CustomButton from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import LanguageChangeIcon from '../../components/languageChangeIcon';
import {setUser} from '../../redux/userProfile';
import {SCREEN_NAMES} from '../../route/rootStack';
import {MainContainer, TitleText} from './login.style';

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

  const dispatch = useDispatch();
  const {t} = useTranslation();

  const onSubmit = (data: any) => {
    dispatch(
      setUser({email: data.email, password: base64.encode(data.password)}),
    );
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAMES.HOME}],
    });
  };

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
          pattern: {value: /\S+@\S+\.\S+/, message: t('emailValidation')},
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
            value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,15}$/,
            message: t('passwordValidation'),
          },
        }}
        defaultValue=""
      />
      <CustomButton
        disabled={!isValid}
        title={t('login')}
        onPress={handleSubmit(onSubmit)}
      />
    </MainContainer>
  );
};

export default LoginScreen;
