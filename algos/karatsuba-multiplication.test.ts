import karatsuba from "./karatsuba-multiplication"

describe("Karatsuba Multiplication", () => {
  test("should return 83810205", () => {
    expect(karatsuba(12345, 6789)).toBe(83810205)
  })
  test("should return 35", () => {
    expect(karatsuba(5, 7)).toBe(35)
  })
  test("should return 132", () => {
    expect(karatsuba(11, 12)).toBe(132)
  })
  test("should return 7006652", () => {
    expect(karatsuba(1234, 5678)).toBe(7006652)
  })
})
