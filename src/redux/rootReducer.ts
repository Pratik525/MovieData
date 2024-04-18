import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import userProfile from './userProfile';
import movies from './movieReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userProfile'],
};

const AppRootReducer = combineReducers({
  userProfile: userProfile,
  movies: movies,
});

const rootReducer = (state: any, action: any) => {
  return AppRootReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
