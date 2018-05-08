export default cards => {
  const fibonacci = [];

  for (let i = 0; i < cards; i++) {
    if (i === 0) {
      fibonacci.push(0);
      continue;
    }

    if (i === 1) {
      fibonacci.push(1);
      continue;
    }

    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
};
