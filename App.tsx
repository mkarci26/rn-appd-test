import { ReactElement } from 'react';
import { AppRegistry } from 'react-native';
import { Instrumentation } from '@appdynamics/react-native-agent';
import { RootStackNavigator, AppPage } from './src/components/organisms/RootStackNavigator';

// Login / Registration
import NativeSplash from 'components/pages/NativeSplash';
import React = require('react');


const appPages: Array<any> = [
  // Login / Registration
  { screenName: 'NativeSplash', componentName: NativeSplash },
];

const App = (): ReactElement => {
  return (
    <>
      <RootStackNavigator appPagesArray={appPages} />
    </>
  );
};

Instrumentation.start({
  appKey: 'somekey',
});

export default App;

AppRegistry.registerComponent('AppdTest-test', () => App);
