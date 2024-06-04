const assert = require('assert')

const findWords = require('./findWords.js').default

const cases =  [
  { inputString: "ate",
    dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
    expected: ["ate", "eat", "tea"],
    description: "Partial match"
  },

  {
    inputString: "oogd",
    dictionary: ["dog", "do", "god", "goo", "go", "good"],
    expected: ["dog", "do", "god", "goo", "go", "good"],
    description: "Complete match"
  },
  {
    inputString: "ate",
    dictionary: ["dog", "do", "god", "goo", "go", "good"],
    expected: [],
    description: "No match"

  }
]

// // Failing cases - uncomment these and comment out the above cases to test
// const cases =  [
//   { inputString: "ate",
//     dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
//     expected: ["ate", "eat"],
//     description: "Partial match"
//   },

//   {
//     inputString: "oogd",
//     dictionary: ["dog", "do", "god", "goo", "go"],
//     expected: ["dog", "do", "god", "goo", "go", "good"],
//     description: "Complete match"
//   },
//   {
//     inputString: "ate",
//     dictionary: ["dog", "do", "god", "goo", "go", "good"],
//     expected: ["dog"],
//     description: "No match"

//   }
// ]

const test = () => {
  cases.forEach(({ inputString, dictionary, expected, description }) => {
    const result = findWords(inputString, dictionary)

    try {
      assert.deepStrictEqual(result, expected)
      console.log(`Passed: ${description}`)
    } catch (error) {
      console.error(`Failed: ${description}`)
      console.error(`  Expected [${expected}] got [${result}]`)
    }
  })
}

module.exports = test
