import CalculatorStore from './CalculatorStore';
import UIStore from './UIStore';

export default class RootStore {
  calculatorStore: object
  uiStore: object
  constructor() {
    this.calculatorStore = new CalculatorStore();
    this.uiStore = new UIStore();
  }
}
