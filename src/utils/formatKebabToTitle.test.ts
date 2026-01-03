import { describe, expect, it } from "vitest";
import { formatKebabToTitle } from "./formatKebabToTitle";

describe("formatKebabToTitle function", () => {
  it.each([
    {
      input: "adora-hou-van-appel-heerlijk",
      expected: "Adora Hou Van Appel Heerlijk",
    },
    {
      input: "adora-hou--van-appel",
      expected: "Adora Hou Van Appel",
    },
    {
      input: "",
      expected: "",
    },
    {
      input: "ADORA-BEN-STERK",
      expected: "Adora Ben Sterk",
    },
    {
      input: "adora-ben-klein",
      expected: "Adora Ben Klein",
    },
    {
      input: "adora-ben-klein!",
      expected: "Adora Ben Klein!",
    },
    {
      input: "adora-ben-klein,",
      expected: "Adora Ben Klein,",
    },
    {
      input: "adora-ben-klein.",
      expected: "Adora Ben Klein.",
    },
    {
      input: "adora,ben!klein.",
      expected: "Adora,Ben!Klein.",
    },
  ])("returns $expected when given $input", ({ input, expected }) => {
    expect(formatKebabToTitle(input)).toBe(expected);
  });
});
