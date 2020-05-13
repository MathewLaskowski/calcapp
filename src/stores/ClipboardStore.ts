import { observable, action } from "mobx"

export default class CalculatorState {
  @observable value1: undefined | number
  @observable value2: undefined | number
  @observable lastButton: undefined | string
  @observable operation: undefined | string

  @action
  setValue1 (value: undefined | number) {
    this.value1 = value
  }

  @action
  setValue2 (value: undefined | number) {
    this.value2 = value
  }

  @action
  setLastButton (value: undefined | string) {
    this.lastButton = value
  }

  @action
  setOperation (value: undefined | string) {
    this.operation = value
  }
}
