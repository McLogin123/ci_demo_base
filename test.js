const sum = require('./sum')
function testsum() {
  if (sum(2,3) !== 5) {
    throw new Error("test fallo,");
}
