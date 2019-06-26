const gameRules = require("./gameRulesExtended.js");

describe("game rules extended", function() {
  it("should answer with a win for brunnen vs schere", function() {
    expect(gameRules("brunnen", "schere")).toBe(1);
  });
  it("should answer with a win for brunnen vs stein", function() {
    expect(gameRules("brunnen", "stein")).toBe(1);
  });
  it("should answer with a loose for brunnen vs papier", function() {
    expect(gameRules("brunnen", "papier")).toBe(2);
  });
  it("should answer with a loose for stein vs brunnen", function() {
    expect(gameRules("stein", "brunnen")).toBe(2);
  });
  it("should answer with a win for papier vs brunnen", function() {
    expect(gameRules("papier", "brunnen")).toBe(1);
  });
  it("should answer with a loose for schere vs brunnen", function() {
    expect(gameRules("schere", "brunnen")).toBe(2);
  });
  it("should answer with a tie for brunnen vs brunnen", function() {
    expect(gameRules("brunnen", "brunnen")).toBe(0);
  });
});
