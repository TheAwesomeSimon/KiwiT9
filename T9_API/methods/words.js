'use strict'

const fs = require('fs');

module.exports = {
    addNewWord: addNewWord,
    checkValidity: checkValidity,
    checkForDups: checkForDups,
    encode: encode,
    getValidWords: getValidWords,
    getWords: getWords,
    loadDictionary: loadDictionary,
    translateT9: translateT9,
    validateWord: validateWord
};

var dictionary = [];
var newWords = [];

const t9 = [
    [' '], // 0
    [''], // 1
    ['a', 'b', 'c'], // 2
    ['d', 'e', 'f'], // 3
    ['g', 'h', 'i'], // 4
    ['j', 'k', 'l'], // 5
    ['m', 'n', 'o'], // 6
    ['p', 'q', 'r', 's'], // 7
    ['t', 'u', 'v'], // 8
    ['w', 'x', 'y', 'z'], // 9
];

function loadDictionary() {
    if (!dictionary.length) {
        let text = fs.readFileSync(__dirname + '/../files/dictionary.txt', 'utf-8');
        dictionary = text.split('\n');
        dictionary.forEach((element, index) => {
            dictionary[index] = element.toLowerCase();
        });
    }
    return dictionary;
}

function translateT9(number, ret = []) {
    if (!number.length) {
        return ret.sort();
    }
    if (!ret.length) {
        return translateT9(number.slice(1), t9[number[0]]);
    }
    const nextRet = t9[number[0]].reduce((m, x) =>
        m.concat(ret.map(word => word.concat(x)))
        , []);
    return translateT9(number.slice(1), nextRet);
}

function checkValidity(combinations) {
    let dic = loadDictionary();
    let results = [];
    combinations.forEach(element => {
        dic.find(found => {
            if (found === element) {
                results.push(found);
            }
        });
        newWords.find(found => {
            if (found === element) {
                results.push(found);
            }
        });
    });
    return results;
}

function getWords(req, res) {
    const input = req.params.number;
    if (!isNaN(input)) {
        res.json(translateT9(input));
    } else {
        res.status(500).send(`${input} is not a valid number, please doublecheck`);
    }
}

function getValidWords(req, res) {
    const input = req.params.number;
    if (!isNaN(input)) {
        res.json(checkValidity(translateT9(input)));
    } else {
        res.status(500).send(`${input} is not a valid number, please doublecheck`);
    }
}

function checkForDups(word) {
    let dup = false;
    newWords.forEach(item => {
        if (item === word) {
            dup = true;
        }
    });
    let dic = loadDictionary();
    dic.forEach(item => {
        if (item === word) {
            dup = true;
        }
    });
    return dup;
}

function addNewWord(req, res) {
    const word = req.params.word.toLowerCase();
    if (validateWord(word)) {
        if (!checkForDups(word)) {
            newWords.push(word);
            newWords.sort();
            res.json('Added');
        } else {
            res.json('Already existing');
        }
    } else {
        res.status(500).send(`${word} is not a valid input`);
    }
}

function encode (req, res) {
    const word = req.params.word.toLowerCase();
    if (validateWord(word)) {
        let wordArr = word.split('');
        let result = '';
        wordArr.forEach(letter => {
            t9.forEach((key, t9index) => {
                key.forEach(element => {
                    if (element === letter) {
                        result = result + t9index.toString();
                    }
                });
            });
        });
        res.json(parseInt(result));
    } else {
        res.status(500).send(`${word} is not a valid input`);
    }
}

function validateWord(word) {
    return /^[a-z]+$/i.test(word);
}