"use strict";
const starWarsName = require("./starwars-names.json");
const uniqueRandomArray = require("unique-random-array");
const getRandomItem = uniqueRandomArray(starWarsName);

const random = number => {
  if (number === undefined) {
    return getRandomItem();
  } else {
    let randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};
module.exports = {
  all: starWarsName,
  random: random
};
