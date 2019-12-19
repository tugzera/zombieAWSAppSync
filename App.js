import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';

import AppNavigator from './src/routes/AppNavigator';
import NavigationActions from './src/services/navigation';
import {Provider as ReduxProvider} from 'react-redux';
import{store} from './src/stores'

import {withAuthenticator} from 'aws-amplify-react-native';


const App = () => {
  return (
      <ReduxProvider store={store}>
      <AppNavigator ref={NavigationActions.setTopLevelNavigator} />
      </ReduxProvider>
  );
};

export default withAuthenticator(App, {includeGreetings: true});
