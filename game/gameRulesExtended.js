const gameRulesClassic = require("./gameRules.js");

const figure = "brunnen";

// the rules are simple and static
const mappings = {
  brunnenstein: 1,
  brunnenpapier: 2,
  brunnenschere: 1,
  brunnenbrunnen: 0,
  scherebrunnen: 2,
  steinbrunnen: 2,
  papierbrunnen: 1
};

/**
 * returns 0 for a tie, 1 for the win of contender1 and 2 for the win of contender2
 */
module.exports = function determineResult(contender1, contender2) {
  if (figure === contender1 || figure === contender2) {
    const combination = `${contender1}${contender2}`;
    return mappings[combination];
  }
  return gameRulesClassic(contender1, contender2);
};

module.exports.figures = [...gameRulesClassic.figures, figure];
