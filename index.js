import { registerRootComponent } from 'expo';
import React from 'react';
import App from './src/index';

function Index() {
  return <App />;
}

registerRootComponent(Index);
