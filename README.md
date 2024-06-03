# Find Words

**Find Words** "implement[s] a function named findWords that accepts two arguments: 1) an input string and 2) a dictionary. This function [...] return[s] an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word."

*A relatively recent version of Node.js is required to run this program.*

Run the program:

```sh
./index <inputString> <dictionary>
```

Run tests:

```sh
./test
```

## Description

### Implementation

At a high level the function is checks if each of the words in the dictionary is a subset of the input string, and returns the words that are.

We iterate over the input string once to get its character count. Then we iterate over the list of words, iterating over each word to get its character count. Lastly, we compare the character count of the word with the character count of the input string to determine if the word is a subset of the input string.

We use an ES6 `Map` rather than an ad hoc map `Object` for clarity (method names and syntax), ability to use `for...of` loops, performance, and avoiding key collisions.

### Time complexity

The time complexity is *O(n)*. This is the best we can do as we need to look at each character in the entire input (the inputString and the dictionary) once to create the maps. Comparing the maps of character frequencies is *O(1)* as we are comparing two maps of, at worst, 26 entries (and if we are using real English words, far fewer).

### Space complexity

The space complexity is also *O(n)*. We need *m+k* *extra* space; *m* is the maximum number of distinct letters in a word plus the distinct letters in inputString, and *k* is the length of the result array.

## Testing

### Additional tests

Additional cases we may wish to test include:

* Empty input string
* Empty list of words
* List with empty string(s)
* Single charcter input strings/dictionary words
* Repeated characters in input string/dictionary words

or any combination of the above. We may also want to test malformed inputs.

Additionally we would want to add unit tests to the `buildCharMap` helper function.
