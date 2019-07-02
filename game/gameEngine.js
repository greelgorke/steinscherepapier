const gameRules = require("./gameRules.js");
const gameRulesExtended = require("./gameRulesExtended.js");

const outcomes = ["tie", "win", "loose"];

function turn(humanInput, gameRules) {
  const randomFigureIndex =
    Math.floor(Math.random() * 10) % gameRules.figures.length;
  const randomFigure = gameRules.figures[randomFigureIndex];
  const outcome = gameRules(humanInput, randomFigure);
  return {
    humanInput,
    generatedInput: randomFigure,
    outcome: outcomes[outcome]
  };
}

module.exports = function classicTurn(humanInput) {
  return turn(humanInput, gameRules);
};
module.exports.figures = gameRules.figures;

module.exports.extended = function extendedTurn(humanInput) {
  return turn(humanInput, gameRulesExtended);
};
module.exports.extended.figures = gameRulesExtended.figures;
