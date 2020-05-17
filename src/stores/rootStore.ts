import CalculatorStore from './CalculatorStore';

export default class RootStore {
  calculatorStore: object
  constructor() {
    this.calculatorStore = new CalculatorStore();
  }
}
