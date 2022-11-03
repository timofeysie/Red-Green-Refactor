Test("First test", () => {
  const result = exampleFunction();
  if (result.length === 100) {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("second test", () => {
  const result = exampleFunction();
  if (result[3] === 'fizz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("third test", () => {
  const result = exampleFunction();
  if (result[0] === 0) {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("fourth test", () => {
  const result = exampleFunction();
  console.log('result', result);
  const test_number = 5;
  const boo = test_number % 3;
  console.log("boo", boo);
  console.log("result[3] % 3", result[3]);
  if (boo === 0) {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});