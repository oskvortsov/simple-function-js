function reverse(stroke) {
  let newStroke = '';

  for (let i = stroke.length - 1; i >= 0; i--) newStroke += stroke[i];

  return newStroke;
}

module.exports = {
  reverse,
};
