const bodyParser = require('body-parser');
const express = require('express');

const port = 8080;

const expressApp = express();
expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use(bodyParser.json());
expressApp.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const wordsMethods = require('./methods/words.js');
const apiRoutes = require('./router/apiRoutes.js')(express.Router(), wordsMethods);
wordsMethods.loadDictionary(); 

// set the restrictedAreaRoutes
expressApp.use('/', apiRoutes);
// initialize the server
expressApp.listen(port, () => {
    console.log(`Running on port ${port}`);
})