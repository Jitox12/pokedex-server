function toUpperCaseFirstKey(word){
let beginning = word.trim().charAt(0).toUpperCase()
let rest = word.trim().slice(1)
let lastWord = beginning + rest

return lastWord
}

module.exports = {
    toUpperCaseFirstKey
}