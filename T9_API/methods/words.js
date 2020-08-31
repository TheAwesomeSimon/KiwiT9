"use strict"

const e = require("express");

module.exports = {
    getWords: getWords,
    getValidWords: getValidWords
};

function getWords(req, res) {
    console.log(`getWords: ${req.params.number}`);
}

function getValidWords(req, res) {
    console.log(`getValidWords: ${req.params.number}`);
}