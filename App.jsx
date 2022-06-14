import React from 'react';
import { Provider } from 'react-redux';

import store from './redux';
import NavigationMain from './NavigationMain';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationMain />
    </Provider>
  );
}
