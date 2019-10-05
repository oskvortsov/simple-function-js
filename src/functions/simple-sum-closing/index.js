const simpleSumClosing = a => b => (!!b && simpleSumClosing(a + b)) || a;

module.exports = {
  simpleSumClosing,
};
