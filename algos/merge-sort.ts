function merge(left: number[], right: number[]) {
  const result = new Array()

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift())
    else result.push(right.shift())
  }

  return [...result, ...left, ...right]
}

export default function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left: number[] = mergeSort(arr.slice(0, mid))
  const right: number[] = mergeSort(arr.slice(mid))

  return merge(left, right)
}
