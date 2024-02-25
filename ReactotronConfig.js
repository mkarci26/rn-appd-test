import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import FlipperConnectionManager from 'reactotron-react-native/dist/flipper';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Appd Testing RN  Mobile',
    createSocket: path => new FlipperConnectionManager(path),
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: { veto: stackFrame => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(
    reactotronRedux({
      name: 'Modern My Active Health App',
      except: ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'],
    }),
  )
  .connect();

export default reactotron;
