import mergeSort from "./merge-sort"

describe("merge sorting", () => {
  test("should return sorted array", () => {
    const expectedOutput = [1, 2, 3, 4, 5]
    expect(mergeSort([5, 3, 2, 4, 1])).toEqual(expectedOutput)
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual(expectedOutput)
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual(expectedOutput)
    expect(mergeSort([3, 5, 1, 4, 2])).toEqual(expectedOutput)
  })
})
