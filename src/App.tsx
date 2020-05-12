import React from 'react';
import Calculator from './components/calcuator/calculator.component';
import { Provider } from 'mobx-react'
import RootStore from './stores/rootStore';

const rootStore = new RootStore()

function App() {
  console.log('render')
  return (
    <Provider
      calculatorStore = {rootStore.calculatorStore}
    >
      <Calculator />
    </Provider>
  );
}

export default App;
