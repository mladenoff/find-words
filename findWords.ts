const findWords = function(inputString: string, dictionary: string[]): string[] {
  const inputMap: Map<string, number> = buildCharMap(inputString)

  const res: string[] = []

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

const buildCharMap = function(str: string): Map<string, number> {
  const map: Map<string, number> = new Map()

  for (const char of str) {
    // The block body could be replaced with a single line using the nullish coalescing
    // operator (i.e. `map.set(char, (map.get(char) ?? 0) + 1)`) or just an `||`. We have opted for
    // the `.has()` check with an `if` statement for readabilty. And because Map is quite performant.

    if (map.has(char)) {
      map.set(char, map.get(char)! + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

export default findWords
