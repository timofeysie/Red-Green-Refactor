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
  console.log("result", result);
  if (result[3] === 'fizz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("third test", () => {
  const result = exampleFunction();
  console.log("result", result);
  if (result[0] === 0) {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});