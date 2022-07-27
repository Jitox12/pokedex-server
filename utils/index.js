function nullValidatorString(fieldvalue) {
  return !fieldvalue || fieldvalue === ""
}

module.exports = {
  nullValidatorString,
}
