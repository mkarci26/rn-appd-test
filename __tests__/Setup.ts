// include this line for mocking react-native-gesture-handler
// noinspection JSUnusedGlobalSymbols

jest.mock('@appdynamics/react-native-agent', () => ({
  Instrumentation: {
    reportMetric: jest.fn(),
    setUserData: jest.fn(),
  },
}));
