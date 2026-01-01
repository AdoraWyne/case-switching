import { it, expect } from "vitest";
import { formatKebabToTitle } from "./formatKebabToTitle";

it("returns string", () => {
  const input = "adora-hou-van-appel";
  const result = formatKebabToTitle(input);
  expect(result).toBe("Adora Hou Van Appel");
});

it("returns string when '--'", () => {
  const input = "adora-hou--van-appel";
  const result = formatKebabToTitle(input);
  expect(result).toBe("Adora Hou Van Appel"); // fix this
});
// tests for empty string, white space, uppercase, double hyphen "-"
