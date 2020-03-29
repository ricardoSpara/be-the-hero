const generateUniqueId = require("../../src/app/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    expect(generateUniqueId()).toHaveLength(8);
  });
});
