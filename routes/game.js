const express = require("express");

const gameEngine = require("../game/gameEngine.js");
const router = express.Router();

const legalFigures = gameEngine.figures;

/* GET game input options listing. */
router.get("/", (req, res) => {
  res.send({ possibleFigures: legalFigures });
});

router.post("/", (req, res) => {
  const turn = req.body;
  // this is usually a matter of proper validation
  if (turn == null)
    return res.status(400).json({ message: "No body supplied" });
  if (turn.figure == null)
    return res.status(400).json({ message: "No figure supplied" });
  if (!legalFigures.includes(turn.figure))
    return res.status(400).json({ message: "Illegal figure supplied" });

  const result = gameEngine(turn.figure);
  res.json({
    yourTurn: result.humanInput,
    myTurn: result.generatedInput,
    outcome: result.outcome
  });
});

module.exports = router;
