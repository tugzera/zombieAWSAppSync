import Reactotron, {asyncStorage} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const configure = {
  name: 'Toolbox',
  host: '192.168.100.110',
};

const storage = {
  asyncStorage: {
    ignore: ['secret'],
    editor: true,
    errors: {veto: () => false},
  },
};

const tron = Reactotron.configure(configure)
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative(storage)
  .use(asyncStorage())
  .connect();

tron.clear();

console.tron = tron;
