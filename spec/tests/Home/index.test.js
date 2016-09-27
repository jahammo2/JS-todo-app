import {
  TestFramework,
  Test,
  Home,
  testFramework
} from '../testHelpers';
let expectedValue;
let actualValue;

testFramework.runTests(['Home','renderTasks'], [
  () => {
    const home = new Home();
    home.tasks = ['testHelpers', 'bar'];
    actualValue = home.renderTasks();
    expectedValue = '<li>testHelpers</li><li>bar</li>';
    testFramework.it(
      'returns a list of list items with tasks',
      new Test(actualValue).equals(expectedValue)
    );
  }
]);
