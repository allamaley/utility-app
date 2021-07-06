export function capitalize(str) {
  if (str.length === 0) {
    return str;
  }
  if (str.length === 1) {
    return str.toUpperCase()
  }
  return `${str[0].toUpperCase()}${str.substring(1).toLowerCase()}`
}