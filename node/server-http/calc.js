function calc(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'substruct':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return 'wrong data';
  }
}

module.exports = {
  calc,
};
