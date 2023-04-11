const fizzBuzz = require("./fizzbuzz");

describe("Fizzbuzz", () => {
  it("returns Fizz when can be divided by 3", () => {
    expect(fizzBuzz.check(3)).toBe("Fizz");
    expect(fizzBuzz.check(18)).toBe("Fizz");
  });
  it("returns Buzz when can be divided by 5", () => {
    expect(fizzBuzz.check(5)).toBe("Buzz");
    expect(fizzBuzz.check(25)).toBe("Buzz");
  });
  it("returns FizzBuzz when can be divided by 3 and 5", () => {
    expect(fizzBuzz.check(30)).toBe("FizzBuzz");
    expect(fizzBuzz.check(45)).toBe("FizzBuzz");
  });
  it("returns the same number, when cannot be devided by 3 and 5", () => {
    expect(fizzBuzz.check(122)).toBe(122);
    expect(fizzBuzz.check(457)).toBe(457);
  });
});