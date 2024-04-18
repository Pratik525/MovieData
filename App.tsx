/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import RootStack from './src/route/rootStack';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18Next';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <RootStack />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
