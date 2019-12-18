import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';
import config from './aws-exports';

import React from 'react';
import {Rehydrated} from 'aws-appsync-react';
import {ApolloProvider} from 'react-apollo';
import client from './src/services/client.js'

if(__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

Amplify.configure(config);

const AppWithProvider = () => {
  return (
    <ApolloProvider client={client}>
      <Rehydrated>
        <App></App>
      </Rehydrated>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithProvider);
