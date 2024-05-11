import React from 'react';
import {Provider} from 'react-redux';
import store from './scr/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './scr/router/root-navigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
