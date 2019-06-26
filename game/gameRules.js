const figures = ["stein", "schere", "papier"];

// the rules are simple and static
const mappings = {
  steinschere: 1,
  steinpapier: 2,
  steinstein: 0,
  scherepapier: 1,
  scherestein: 2,
  schereschere: 0,
  papierstein: 1,
  papierschere: 2,
  papierpapier: 0
};

/**
 * returns 0 for a tie, 1 for the win of contender1 and 2 for the win of contender2
 */
module.exports = function determineResult(contender1, contender2) {
  if (!figures.includes(contender1) || !figures.includes(contender2)) {
    throw new Error("Illegal Arguments");
  }
  const combination = `${contender1}${contender2}`;
  return mappings[combination];
};

module.exports.figures = figures;
