/**
 * Test runner by [Kynan Stewart](https://github.com/k7n4n5t3w4rt)
 */

function pass(message) {
  console.log(message);
}
function fail(message) {
  console.error(message);
}
function Test(message, testFunction) {
  console.log(message);
  testFunction();
}
