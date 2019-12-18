import AWSAppSyncClient from 'aws-appsync';
import {Hermes} from 'apollo-cache-hermes';

import config from '../../aws-exports';
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

export default client