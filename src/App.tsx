import React from 'react';
import { Provider } from 'mobx-react'

import Calculator from './components/calcuator/calculator.component';
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
        <Layout>
          <Calculator />
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
