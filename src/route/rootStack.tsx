import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import i18n from '../locales/i18Next';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';

export const SCREEN_NAMES = {
  HOME: 'Home',
  LOGIN: 'Login',
};
const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  const {
    user: {email},
    language
  } = useSelector((state: any) => state.userProfile);

  useEffect(()=>{
    console.log('Email is : ', email);
    i18n.changeLanguage(language)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={email ? SCREEN_NAMES.HOME : SCREEN_NAMES.LOGIN}>
        <Stack.Screen
          name={SCREEN_NAMES.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAMES.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
