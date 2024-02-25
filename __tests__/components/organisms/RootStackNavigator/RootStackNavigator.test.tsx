import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import RootStackNavigator, { AppPage } from 'components/organisms/RootStackNavigator';

describe('Root Navigation Test Suite', () => {

  const EducationalOverlay = () => <>Some screen text</>;

  const appPagesMock: Array<AppPage> = [
    { screenName: 'SomeScreen', componentName: EducationalOverlay },
  ];

  it('renders correctly', () => {
    const { toJSON } = render(
      <RootStackNavigator appPagesArray={appPagesMock} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
