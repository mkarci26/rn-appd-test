import * as React from 'react';
import { ReactElement } from 'react';

export type RootStackProps = {
  appPagesArray: Array<AppPage>;
};

export type AppPage = {
  screenName: keyof any;
  componentName: any;
};



export const RootStackNavigator = ({ appPagesArray }: RootStackProps): ReactElement => (
  <>Home Screen</>
);

export default RootStackNavigator;
