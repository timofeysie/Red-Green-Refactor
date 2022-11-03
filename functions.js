const exampleFunction = () => {
  const result = [];
  for (var i = 0; i < 100; i++) {
    result.push(fizzbuzz(i));
  }
  return result;
};

const fizzbuzz = (input) => {
  if (input === 3) {
    return "fizz"
  } else {
    return input
  }
}