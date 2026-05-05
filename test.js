const sum = require('./sum')

try {
  const result= sum(3, 5);
  console.log("Resultado suma: ", result)
} catch (error) {
  console.error("Error: ", error.message);
}
