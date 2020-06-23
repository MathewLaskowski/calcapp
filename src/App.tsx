import React from 'react';
import { Provider } from 'mobx-react'

import Layout from './components/layout/layout.component';

import RootStore from './stores/rootStore';

const rootStore = new RootStore()

function App() {
  return (
    <Provider
      calculatorStore = {rootStore.calculatorStore}
      uiStore = {rootStore.uiStore}
    >
      <div style={{ display: 'flex', height: '100vh' }}>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
