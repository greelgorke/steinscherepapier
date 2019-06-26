const gameRules = require("./gameRules.js");

const outcomes = ["tie", "win", "loose"];

module.exports = function turn(humanInput) {
  const randomFigureIndex = Math.floor(Math.random() * 10) % 3;
  const randomFigure = gameRules.figures[randomFigureIndex];
  const outcome = gameRules(humanInput, randomFigure);
  return {
    humanInput,
    generatedInput: randomFigure,
    outcome: outcomes[outcome]
  };
};

module.exports.figures = gameRules.figures;
