import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';
import config from './aws-exports';

import React from 'react';
import AWSAppSyncClient from 'aws-appsync';
import {Rehydrated} from 'aws-appsync-react';
import {ApolloProvider} from 'react-apollo';
import {Hermes} from 'apollo-cache-hermes';
import {Auth} from 'aws-amplify';

if(__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

Amplify.configure(config);

const cache = new Hermes({verbose: true});

const client = new AWSAppSyncClient(
  {
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
      type: config.aws_appsync_authenticationType,
      jwtToken: async () =>
        (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    disableOffline: true,
  },
  {cache},
  
  
);

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
