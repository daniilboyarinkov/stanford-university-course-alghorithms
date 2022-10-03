import countInversions from './counting-inversions'

describe('countInversions', () => {
  test('should return 4', () => {
    expect(countInversions([1, 2, 4, 3, 7, 6, 5])).toBe(4) // (4, 3) (7, 6) (7, 5) (6, 5) -- 4
  })
  test('should return 4', () => {
    expect(countInversions([6, 5, 4, 3, 2, 1])).toBe(15) // -- 15
  })
})
