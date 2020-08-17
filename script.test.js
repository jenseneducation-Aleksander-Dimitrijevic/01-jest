const { add, subtract } = require("./script.js");

// Jest har funktionerna it, expect och toBe
it("should return sum of two numbers", () => {
  // Förbered test (Arrange)
  const x = 45,
    y = 31;
  let expected = x + y;

  //   Agera, anropa funktion som ska testas (Act)
  let actualValue = add(x, y);

  //   Kör själva testet (Assert)
  expect(actualValue).toBe(expected);
});

it("should return the difference between two numbers", () => {
  const x = 13,
    y = 12;
  let expected = x - y;
  let actualValue = subtract(x, y);
  expect(actualValue).toBe(expected);
});
