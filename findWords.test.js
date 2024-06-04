"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const findWords_js_1 = __importDefault(require("./findWords.js"));
const cases = [
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
];
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
        const result = (0, findWords_js_1.default)(inputString, dictionary);
        try {
            assert.deepStrictEqual(result, expected);
            console.log(`Passed: ${description}`);
        }
        catch (error) {
            console.error(`Failed: ${description}`);
            console.error(`  Expected [${expected}] got [${result}]`);
        }
    });
};
exports.default = test;
