const request = require("supertest");
const app = require("../app.js");

describe("game router classic", function() {
  it("should deliver a list of figures on GET", function(done) {
    request(app)
      .get("/game")
      .expect("Content-Type", /json/)
      .expect(res =>
        expect(res.body).toEqual({
          possibleFigures: ["stein", "schere", "papier"]
        })
      )
      .expect(200, done);
  });

  it("should deliver a result object on POST", function(done) {
    request(app)
      .post("/game")
      .send({ figure: "stein" })
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body).toBeDefined();
        expect(res.body.yourTurn).toBe("stein");
        expect(res.body.myTurn).toBeDefined();
        expect(res.body.outcome).toBeDefined();
      })
      .expect(200, done);
  });

  it("should respond with 400 to invalid POST body", function(done) {
    request(app)
      .post("/game")
      .send({})
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body.message).toBe("No figure supplied");
      })
      .expect(400, done);
  });

  it("should respond with 400 to invalid POST body parameter", function(done) {
    request(app)
      .post("/game")
      .send({ figure: "glass" })
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body.message).toBe("Illegal figure supplied");
      })
      .expect(400, done);
  });
});

describe("game router extended", function() {
  it("should deliver a list of figures on GET", function(done) {
    request(app)
      .get("/game/extended")
      .expect("Content-Type", /json/)
      .expect(res =>
        expect(res.body).toEqual({
          possibleFigures: ["stein", "schere", "papier", "brunnen"]
        })
      )
      .expect(200, done);
  });

  it("should deliver a result object on POST", function(done) {
    request(app)
      .post("/game/extended")
      .send({ figure: "stein" })
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body).toBeDefined();
        expect(res.body.yourTurn).toBe("stein");
        expect(res.body.myTurn).toBeDefined();
        expect(res.body.outcome).toBeDefined();
      })
      .expect(200, done);
  });

  it("should respond with 400 to invalid POST body", function(done) {
    request(app)
      .post("/game/extended")
      .send({})
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body.message).toBe("No figure supplied");
      })
      .expect(400, done);
  });

  it("should respond with 400 to invalid POST body parameter", function(done) {
    request(app)
      .post("/game/extended")
      .send({ figure: "glass" })
      .expect("Content-Type", /json/)
      .expect(res => {
        expect(res.body.message).toBe("Illegal figure supplied");
      })
      .expect(400, done);
  });
});
