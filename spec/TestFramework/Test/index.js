import Logger from '../Logger';
import {
  expectToEqual
} from './expectations';

class Test {
  constructor(actualValue) {
    this.actualValue = actualValue;
  }

  equals(expectedValue) {
    return {
      passed: this.actualValue === expectedValue,
      errorMessage: `expected ${this.actualValue} to equal ${expectedValue}`
    }
  }
}

export default Test;
