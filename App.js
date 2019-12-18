import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';

import AppNavigator from './src/routes/AppNavigator';
import NavigationActions from './src/services/navigation';

import {withAuthenticator} from 'aws-amplify-react-native';


const App = () => {
  return (
    <>
      <AppNavigator ref={NavigationActions.setTopLevelNavigator} />
    </>
  );
};

export default withAuthenticator(App, {includeGreetings: true});
