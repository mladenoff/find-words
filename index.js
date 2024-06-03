#!/usr/bin/env node

const findWords = require('./findWords.js')

const args = process.argv.slice(2)

const inputString = args[0]

const dictionary = args[1].split(',').map(word => word.trim())

console.log(findWords(inputString, dictionary))
