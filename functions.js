const exampleFunction = () => {
  const result = [];
  for (var i = 1; i < 101; i++) {
    result.push(fizzbuzz(i));
  }
  return result;
};

const fizzbuzz = (input) => {
  if(input % 15 === 0) {
    return 'fizzbuzz'
  } else if (input % 3 === 0) {
    return "fizz"
  } else if(input % 5 === 0) {
    return 'buzz'
  } else {
    return input
  }
}

const fizzbuzzOneLine = (input) => {
  input % 15 === 0 ? 'fizzbuzz' : input % 3 === 0 ? 'fizz' : input % 5 === 0 ? 'buzz' : input
}