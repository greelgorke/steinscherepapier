const gameRules = require("./gameRules.js");

describe("game rules", function() {
  it("should answer with a win for stein vs schere", function() {
    expect(gameRules("stein", "schere")).toBe(1);
  });
  it("should answer with a win for schere vs papier", function() {
    expect(gameRules("schere", "papier")).toBe(1);
  });
  it("should answer with a win for papier vs stein", function() {
    expect(gameRules("papier", "stein")).toBe(1);
  });
  it("should answer with a loose for stein vs papier", function() {
    expect(gameRules("stein", "papier")).toBe(2);
  });
  it("should answer with a loose for papier vs schere", function() {
    expect(gameRules("papier", "schere")).toBe(2);
  });
  it("should answer with a loose for schere vs stein", function() {
    expect(gameRules("schere", "stein")).toBe(2);
  });
  it("should answer with a tie for stein vs stein", function() {
    expect(gameRules("stein", "stein")).toBe(0);
  });
  it("should answer with a tie for schere vs schere", function() {
    expect(gameRules("schere", "schere")).toBe(0);
  });
  it("should answer with a tie for papier vs papier", function() {
    expect(gameRules("papier", "papier")).toBe(0);
  });
});
