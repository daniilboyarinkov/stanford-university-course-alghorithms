/**
 * Time complexity: O(n)
 * @param input The array which subarrays should be sorted
 * @param start Start of the first array
 * @param mid End of first array, not included
 * @param end End of second array, not including
 */
function merge(
  input: number[],
  start: number,
  mid: number,
  end: number
): number {
  const left = input.slice(start, mid)
  const right = input.slice(mid, end)

  left[left.length] = -Infinity as any
  right[right.length] = -Infinity as any

  let inversionCount = 0

  for (let i = start; i < end; i++) {
    if (left[0] > right[0]) {
      inversionCount += right.length - 1 // Do not include Infinity in the count
      input[i] = left.shift()!
    } else {
      input[i] = right.shift()!
    }
  }

  return inversionCount
}

/**
 * Count the number of inversions
 * Time complexity: O(n*lg(n)).
 * @param input The array which should be sorted
 * @param start Left side of the subarray
 * @param end Right side of the subarray, not included
 */
export default function countInversions(
  input: number[],
  start: number = 0,
  end: number = input.length
): number {
  if (end - start <= 1) return 0

  const mid = Math.floor((start + end) / 2)
  const leftCount = countInversions(input, start, mid)
  const rightCount = countInversions(input, mid, end)

  return leftCount + rightCount + merge(input, start, mid, end)
}
