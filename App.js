import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';

import {withAuthenticator} from 'aws-amplify-react-native';

import {graphql, compose} from 'react-apollo';
import {buildSubscripton} from 'aws-appsync';
import {graphqlMutation} from 'aws-appsync-react';
import {ListItem, Button, FormInput} from 'react-native-elements';
import {listZombies} from './src/graphql/queries';
import {createZombie} from './src/graphql/mutations';
import {onCreateZombie} from './src/graphql/subscriptions';

const App = () => {
  const [values, setValues] = useState({name: null});

  return (
    <>
      <View>
      </View>
    </>
  );
};

export default withAuthenticator(App, {includeGreetings: true});
