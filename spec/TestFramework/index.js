import {
  GREEN,
  RED
} from './Constants/colors';
import Logger from './Logger';
import Test from './Test';

class TestFramework {
  constructor() {
    this.testSpaces = 0;
  }

  it(description, test) {
    new Logger(
      this.testSpaces,
      description,
      GREEN
    ).run();

    if (!test.passed) {
      new Logger(
        this.testSpaces + 2,
        test.errorMessage,
        RED
      ).run();
    }
  }

  runTests(descriptions, tests) {
    this.testSpaces = descriptions.length * 2;
    this.logDescriptions(descriptions);

    tests.forEach((test) => {
      test();
    });
  }

  logDescriptions(descriptions) {
    descriptions.forEach((description, index) => {
      new Logger(
        index * 2,
        description,
        GREEN
      ).run();
    });
  }
}

export default TestFramework;
