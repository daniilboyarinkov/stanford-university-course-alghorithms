export default function karatsuba(num1: number, num2: number) {
  if (num1 < 10 || num2 < 10) return (num1 as number) * (num2 as number)

  const m = Math.min(String(num1).length, String(num2).length)
  const m2 = Math.floor(m / 2)

  // Split the digit sequences in the middle.
  const high1 = Math.floor(num1 / 10 ** m2)
  const low1 = num1 % 10 ** m2
  const high2 = Math.floor(num2 / 10 ** m2)
  const low2 = num2 % 10 ** m2

  // 3 recursive calls made to numbers approximately half the size.
  const z0: number = karatsuba(low1, low2)
  const z1: number = karatsuba(low1 + high1, low2 + high2)
  const z2: number = karatsuba(high1, high2)

  return (z2 * 10 ** (m2 * 2) + (z1 - z2 - z0) * 10 ** m2 + z0) as number
}
