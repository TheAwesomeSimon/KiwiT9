module.exports = (router, wordsMethods) => {
    router.get('/words/:number', wordsMethods.getWords);
    router.get('/validWords/:number', wordsMethods.getValidWords);
    router.get('/newWord/:word', wordsMethods.addNewWord);
    router.get('/encode/:word', wordsMethods.encode);
    return router;
};