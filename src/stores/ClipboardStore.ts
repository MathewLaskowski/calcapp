import { observable } from "mobx"

export class CalculatorState {
  @observable value1: undefined | number
  @observable value2: undefined | number
  @observable lastButton: undefined | string
  @observable operation: undefined | string
}
