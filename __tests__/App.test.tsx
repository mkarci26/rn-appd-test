import 'react-native';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
// eslint-disable-next-line import/extensions
import App from '../App';

jest.mock('@appdynamics/react-native-agent', () => ({
  Instrumentation: {
    start: jest.fn(),
  },
  useCallback: jest.fn(),
}));


describe('App test suite', () => {

  it('should render correctly', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });
});
