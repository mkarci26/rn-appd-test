import React, { useEffect } from 'react';
import 'react-native-get-random-values';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, NameSpaces } from '@appd-mep/shared-core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appConfigInitialize } from 'models/Common';
import Reactotron from './ReactotronConfig';
import Config from 'react-native-config';
import { ThemeProvider } from 'contexts/ThemeContext';
import { LoadingProvider } from 'contexts/LoadingContext';
import { NetworkStatusProvider } from 'contexts/NetworkStatusProvider';

if (__DEV__) {
  import('./ReactotronConfig').then(() => {
    console.log('Reactotron Configured');
  });
}

if (!Config.APP_BASE_URL) {
  throw new Error('Env variables APP_BASE_URL is missing.');
}
// noinspection JSUnresolvedReference
const enhancer = __DEV__ ? Reactotron.createEnhancer() : null;
const { store, persistor } = createStore(enhancer);

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const MAHApp = () => {
  useEffect(() => {
    appConfigInitialize('Guest', [
      NameSpaces.CONTENT,
      NameSpaces.EXPLORE,
      NameSpaces.GENERIC,
      NameSpaces.HA,
      NameSpaces.HA_NAME,
      NameSpaces.HRA,
      NameSpaces.HRA_NAME,
      NameSpaces.JOURNEY,
      NameSpaces.LANDING,
      NameSpaces.LOGIN,
      NameSpaces.REGISTRATION,
      NameSpaces.MHS,
      NameSpaces.MHI_NAME,
      NameSpaces.ONBOARDING,
      NameSpaces.PHR,
      NameSpaces.PHR_NAME,
      NameSpaces.PROFILE,
    ]);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <LoadingProvider>
            <NetworkStatusProvider>
              <App />
            </NetworkStatusProvider>
          </LoadingProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MAHApp);
