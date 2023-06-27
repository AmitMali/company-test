export function cleanedArrayToString(arr) {
  return arr.slice(1).toString().split(",").join(", ");
}
