import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux';
import NavigationMain from './src/NavigationMain';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationMain />
    </Provider>
  );
}
