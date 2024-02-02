export default function normalizeNumber(value) {
  const number = parseInt(value)

  if (isNaN(number)) {
    return false
  }

  if (number < 0) {
    return false
  }

  return number
}
