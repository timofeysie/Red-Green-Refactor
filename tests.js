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
  if (result[2] === 'fizz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});


Test("Third test", () => {
  const result = exampleFunction();
  if (result[4] === 'buzz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("fourth test", () => {
  const result = exampleFunction();
  if (result[5] === 'fizz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});

Test("fifth test", () => {
  const result = exampleFunction();
  console.log(result)
  if (result[14] === 'fizzbuzz') {
    pass(`The test passes`);
  } else {
    fail(`The test fails`);
  }
});