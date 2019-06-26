const express = require("express");

const gameEngine = require("../game/gameEngine.js");
const router = express.Router();

/* GET game input options listing. */
router.get("/", (req, res) => {
  res.send({ possibleFigures: gameEngine.figures });
});

/* GET extended game input options listing. */
router.get("/extended/", (req, res) => {
  res.send({ possibleFigures: gameEngine.extended.figures });
});

router.post("/", (req, res) => {
  const turn = req.body;
  const validationResult = validate(turn, gameEngine.figures);

  if (validationResult != null) {
    return res.status(400).json(validationResult);
  }

  const result = gameEngine(turn.figure);

  res.json({
    yourTurn: result.humanInput,
    myTurn: result.generatedInput,
    outcome: result.outcome
  });
});

router.post("/extended/", (req, res) => {
  const turn = req.body;

  const validationResult = validate(turn, gameEngine.extended.figures);

  if (validationResult != null) {
    return res.status(400).json(validationResult);
  }

  const result = gameEngine.extended(turn.figure);
  res.json({
    yourTurn: result.humanInput,
    myTurn: result.generatedInput,
    outcome: result.outcome
  });
});

function validate(turn, figures) {
  if (turn == null) {
    return { message: "No body supplied" };
  }
  if (turn.figure == null) {
    return { message: "No figure supplied" };
  }
  if (!figures.includes(turn.figure)) {
    return { message: "Illegal figure supplied" };
  }
}

module.exports = router;
