const starWarsName = require('./starwars-names.json')
const uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: starWarsName,
  random: uniqueRandomArray(starWarsName)
};
