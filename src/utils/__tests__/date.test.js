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

  describe("getDaysPassed", () => {
    it("returns the number of days between two dates", () => {
      const dateUtils = makeDateUtils();
      const result = dateUtils.getDaysPassed(
        "2022-02-28T12:00:00Z",
        "2022-02-26T12:00:00Z"
      );
      expect(result).toBe(2);
    });

    it("returns 0 when the two dates are the same", () => {
      const dateUtils = makeDateUtils();
      const result = dateUtils.getDaysPassed(
        "2022-02-28T12:00:00Z",
        "2022-02-28T12:00:00Z"
      );
      expect(result).toBe(0);
    });

    it("returns the absolute difference when the first date is before the second date", () => {
      const dateUtils = makeDateUtils();
      const result = dateUtils.getDaysPassed(
        "2022-02-26T12:00:00Z",
        "2022-02-28T12:00:00Z"
      );
      expect(result).toBe(2);
    });
  });

  describe("msToMinutes", () => {
    const { msToMinutes } = makeDateUtils();

    test("converts 60000 ms to 01:00", () => {
      expect(msToMinutes(60000)).toBe("01:00");
    });

    test("converts 123456 ms to 02:03", () => {
      expect(msToMinutes(123456)).toBe("02:03");
    });

    test("converts 1000 ms to 00:01", () => {
      expect(msToMinutes(1000)).toBe("00:01");
    });

    test("converts 0 ms to 00:00", () => {
      expect(msToMinutes(0)).toBe("00:00");
    });
  });

  describe("secondsToHours", () => {
    const { secondsToHours } = makeDateUtils();

    test("formats 0 seconds", () => {
      expect(secondsToHours(0)).toBe("00:00");
    });

    test("formats 59 seconds", () => {
      expect(secondsToHours(59)).toBe("00:59");
    });

    test("formats 60 seconds", () => {
      expect(secondsToHours(60)).toBe("01:00");
    });

    test("formats 3599 seconds", () => {
      expect(secondsToHours(3599)).toBe("59:59");
    });

    test("formats 3600 seconds", () => {
      expect(secondsToHours(3600)).toBe("01:00:00");
    });

    test("formats 86399 seconds", () => {
      expect(secondsToHours(86399)).toBe("23:59:59");
    });

    test("formats 86400 seconds", () => {
      expect(secondsToHours(86400)).toBe("24:00:00");
    });

    test("throws an error for negative input values", () => {
      expect(() => secondsToHours(-1)).toThrow(
        "Input value must be a non-negative integer"
      );
    });

    test("throws an error for non-integer input values", () => {
      expect(() => secondsToHours(123.45)).toThrow(
        "Input value must be a non-negative integer"
      );
    });
  });
});
