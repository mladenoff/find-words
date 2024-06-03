/**
 * Finds words from the dictionary that can be formed by rearranging some or all of the letters in the input string
 *
 * @param {string} inputString - A string consisting of lowercase English letters. The string may contain repeated letters.
 * @param {string[]} dictionary - An array that specifies the universe of valid output words. All words will consist of lowercase English letters.
 * @returns {string[]} An array of words from the dictionary that can be formed using the input string characters.
 */
const findWords = function(inputString, dictionary) {
  const inputMap = buildCharMap(inputString)

  const res = []

  for (const word of dictionary) {
    let isWord = true

    const wordMap = buildCharMap(word)

    // Use a `for...of` loop rather than `.forEach()` to allow to break out early when we know we do not
    // have a match.
    for (const [char, count] of wordMap) {
      // Handling the case where .get() returns `undefined` is simpler than the block in `buildCharMap()`
      // so have opted against `if (!inputMap.has(char) || inputMap.get(char) < count)` here.

      if (count > (inputMap.get(char) ?? 0)) { // extra parens; `>` has higher precedence than `??`
        isWord = false
        break
      }
    }

    if (isWord) res.push(word)
  }

  return res
}

/**
 * Generates a map of character counts from a given string.
 *
 * @param {string} str - The input string to be processed.
 * @returns {Map<string, number>} A map where the keys are characters from the string and the values are the frequency of each character.
 */
const buildCharMap = function(str) {
  const map = new Map()

  for (const char of str) {
    // The block body could be replaced with a single line using the nullish coalescing
    // operator (i.e. `map.set(char, (map.get(char) ?? 0) + 1)`) or just an `||`. We have opted for
    // the `.has()` check with an `if` statement for readabilty. And because Map is quite performant.

    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

module.exports = findWords
