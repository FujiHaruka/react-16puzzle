function incrementalNumbers (initialNumber, length) {
  let array = Array(length)
  for (let i = 0; i < length; i++) {
    array[i] = initialNumber + i
  }
  return array
}

const Util = {
  incrementalNumbers
}

export default Util
