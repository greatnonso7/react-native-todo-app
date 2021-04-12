import React from 'react';

import 'react-native-gesture-handler';
import {StatusBar, LogBox} from 'react-native';
import AppNavigation from './navigations';
import {Provider} from 'react-redux';
import store from './redux/store';

if (!__DEV__) {
  console.log = () => null;
}

console.warn = () => {};
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <AppNavigation />
    </Provider>
  );
};

export default App;
