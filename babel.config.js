module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          assets: './src/assets',
          components: './src/components',
          contexts: './src/contexts',
          hooks: './src/hooks',
          models: './src/models',
          themes: './src/theme',
          utils: './src/utils',
          'mocks/*': ['./__mocks__/'],
        },
      },
    ],
  ],
};
