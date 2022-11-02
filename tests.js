Test("First test", () => {
  const result = fizzbuzz(3);
  if (result === 'fizz') {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});
