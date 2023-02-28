import makeDateUtils from "../date.utils";

const dateUtils = makeDateUtils();

describe("Utils: Date", () => {
  describe("isAfter", () => {
    it("returns true when first date is after the second date", () => {
      const result = dateUtils.isAfter(
        "2023-02-28T12:00:00Z",
        "2023-02-28T11:00:00Z"
      );
      expect(result).toBe(true);
    });

    it("returns false when first date is before the second date", () => {
      const result = dateUtils.isAfter(
        "2023-02-28T11:00:00Z",
        "2023-02-28T12:00:00Z"
      );
      expect(result).toBe(false);
    });

    it("returns false when first date is the same as the second date", () => {
      const result = dateUtils.isAfter(
        "2023-02-28T12:00:00Z",
        "2023-02-28T12:00:00Z"
      );
      expect(result).toBe(false);
    });
  });

  describe("subtractHours", () => {
    it("subtracts the specified number of hours from the input date", () => {
      const result = dateUtils.subtractHours("2023-02-28T12:00:00Z", 2);
      expect(result.toISOString()).toBe("2023-02-28T10:00:00.000Z");
    });

    it("handles negative hour values", () => {
      const result = dateUtils.subtractHours("2023-02-28T12:00:00Z", -2);
      expect(result.toISOString()).toBe("2023-02-28T14:00:00.000Z");
    });
  });

  describe("addHours", () => {
    it("adds the specified number of hours to the input date", () => {
      const result = dateUtils.addHours("2023-02-28T12:00:00Z", 2);
      expect(result.toISOString()).toBe("2023-02-28T14:00:00.000Z");
    });

    it("handles negative hour values", () => {
      const result = dateUtils.addHours("2023-02-28T12:00:00Z", -2);
      expect(result.toISOString()).toBe("2023-02-28T10:00:00.000Z");
    });
  });
});
