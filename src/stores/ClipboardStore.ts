import { observable, action } from "mobx"

export interface CalculatorStoreType {
  value1: undefined | number
  value2: undefined | number
  lastButton: undefined | string
  operation: undefined | string
  setValue1: (value: undefined | number) => void,
  setValue2: (value: undefined | number) => void,
  setLastButton: (value: undefined | string) => void,
  setOperation: (value: undefined | string) => void
}

export default class CalculatorStore {
  @observable value1: undefined | number
  @observable value2: undefined | number
  @observable lastButton: undefined | string
  @observable operation: undefined | string

  @action
  setValue1 = (value: undefined | number) => {
    this.value1 = value
  }

  @action
  setValue2 = (value: undefined | number) => {
    this.value2 = value
  }

  @action
  setLastButton = (value: undefined | string) => {
    this.lastButton = value
  }

  @action
  setOperation = (value: undefined | string) => {
    this.operation = value
  }
}
