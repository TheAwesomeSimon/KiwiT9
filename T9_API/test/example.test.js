const assert = require('assert');
const words = require('../methods/words.js');

describe('Test', () => {
    it('check validity', () => {
        assert.equal(words.checkValidity(['xxooxx']).length, 0);
    });
    it('check duplicates', () => {
        assert.equal(words.checkForDups('hello'), true);
    });
    it('load dictionary', () => {
        assert.equal(words.loadDictionary().length > 0, true);
    });
    it('validate word', () => {
        assert.equal(words.validateWord('ahoy'), true);
    });
});