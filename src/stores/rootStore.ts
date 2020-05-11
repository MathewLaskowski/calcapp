import CalculatorStore from './ClipboardStore';

export default class RootStore {
  calculatorStore: object
  constructor() {
    this.calculatorStore = new CalculatorStore();
  }
}
