import { observable, action } from "mobx"

type num = undefined | number
type str = undefined | string

export interface CalculatorStoreType {
  value1: num
  value2: num
  lastButton: str
  operation: str
  setValue1: (value: num) => void,
  setValue2: (value: num) => void,
  setLastButton: (value: str) => void,
  setOperation: (value: str) => void
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
