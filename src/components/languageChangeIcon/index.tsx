import React from 'react';
import {I18nManager, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';
import i18n from '../../locales/i18Next';
import {useAppDispatch} from '../../redux/store';
import {setLanguage} from '../../redux/userProfile';
import {Container, ImageContainer} from './languageChangeIcon.style';

const LanguageChangeIcon: React.FC = () => {
  const dispatch = useAppDispatch();

  const onPress = () => {
    let language = 'en';
    let allowRTL = false;
    if (i18n.language === 'en') {
      language = 'ar';
      allowRTL = true;
    }
    I18nManager.allowRTL(allowRTL);
    I18nManager.forceRTL(allowRTL);
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    setTimeout(() => {
      RNRestart.restart();
    }, 50);
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <ImageContainer source={require('../../assests/images/language.png')} />
      </TouchableOpacity>
    </Container>
  );
};

export default LanguageChangeIcon;
