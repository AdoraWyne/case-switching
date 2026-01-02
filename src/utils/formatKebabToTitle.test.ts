import { describe, expect, it } from "vitest";
import { formatKebabToTitle } from "./formatKebabToTitle";

describe("formatKebabToTitle function", () => {
  it("returns string when passing a kebab string", () => {
    const input = "adora-hou-van-appel";
    const result = formatKebabToTitle(input);
    expect(result).toBe("Adora Hou Van Appel");
  });

  it("returns string when '--'", () => {
    const input = "adora-hou--van-appel";
    const result = formatKebabToTitle(input);
    expect(result).toBe("Adora Hou Van Appel"); // fix this
  });

  it("returns empty string when passing empty string", () => {
    const input = "";
    const result = formatKebabToTitle(input);
    expect(result).toBe("");
  });

  it("returns title case when passing in all UPPERCASE", () => {
    const input = "ADORA-BEN-STERK";
    const result = formatKebabToTitle(input);
    expect(result).toBe("Adora Ben Sterk");
  });

  it("returns title case when passing in all lowercase", () => {
    const input = "adora-ben-klein";
    const result = formatKebabToTitle(input);
    expect(result).toBe("Adora Ben Klein");
  });

  it("returns title case when including exclamation mark, comma, or full stop", () => {
    const inputA = "adora-ben-klein!";
    const inputB = "adora-ben-klein,";
    const inputC = "adora-ben-klein.";
    const inputD = "adora,ben!klein.";
    const resultA = formatKebabToTitle(inputA);
    const resultB = formatKebabToTitle(inputB);
    const resultC = formatKebabToTitle(inputC);
    const resultD = formatKebabToTitle(inputD);
    expect(resultA).toBe("Adora Ben Klein!");
    expect(resultB).toBe("Adora Ben Klein,");
    expect(resultC).toBe("Adora Ben Klein.");
    expect(resultD).toBe("Adora,Ben!Klein.");
  });
});

// tests for empty string, white space, uppercase, double hyphen "-"
