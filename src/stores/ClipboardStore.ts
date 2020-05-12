import { observable } from "mobx"

<<<<<<< HEAD
export default class CalculatorState {
=======
export class CalculatorState {
>>>>>>> be47a5c19eea5b0930cb051b077d294a54bd5004
  @observable value1: undefined | number
  @observable value2: undefined | number
  @observable lastButton: undefined | string
  @observable operation: undefined | string
}
