module.exports = (router, wordsMethods) => {
    router.get('/words/:number', wordsMethods.getWords);
    router.get('/validWords/:number', wordsMethods.getValidWords);
    return router;
};