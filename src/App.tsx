import React from 'react';
import { Provider } from 'mobx-react'

import Calculator from './components/calcuator/calculator.component';
import Menu from './components/menu/menu.component'

import RootStore from './stores/rootStore';

const rootStore = new RootStore()

function App() {
  return (
    <Provider
      calculatorStore = {rootStore.calculatorStore}
    >
      <Menu />
      <Calculator />
    </Provider>
  );
}

export default App;
