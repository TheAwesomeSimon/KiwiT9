## Architecture

The front-end consists of 6 main React components: <br />
`<App />` - main component, renders home button and handles router
`<Home />` - route "/home" - landing page of the app (URL "/" redirects to "/home") <br />
`<Decode />` - route "/decode" - main functionality of the task is handled here, textfield allows the user to enter a number and results are rendered underneath it <br />
`<Encode />` - route "/encode" - reverse funcionality - text field allows for string input and number that corresponds to it is rendered, with the possibility to click to copy to clipboard <br />
`<NewWord />` - route "/newWord" - if the user is not satisfied with dictionary results, the component offers possibility to add custom dictionary entry <br />
`<ShowMore />` - component handling overflowing results in `<Decode />` - "show more/less" buttons - to be honest, I don't know why I did it functionally, CSS could handle it as well... <br />

The back-end uses express router to handle API routes and all of the methods are in a single file `./methods/words.js`, since they are all concern the same topic - words. <br />
Example test was done with mocha.

## Possible Improvements

Due to lack of time, I did not manage to do everything as I wanted. Here's what I would improve: <br />
- implement DB and store the dictionary there, instead of a file - new load required on server start and added custom words are lost after reset - another option would be to write newly added words to the file
- tests - I made one example test using mocha, unfortunately I did not have time to implement any front-end tests, I would try Jest for that
- UI - more CSS, more fun...
- Comment the code - in production grade code I like to use JSDoc, so it's readable and easily understandable
- docker container for the whole project

## Packages Used
- express and body-parser - api - set up proper API router
- fs (file system) - api -reading the dictionary file
- mocha - api - testing
- material UI - react - used for input fields
- styled-components - react - simple CSS
- react-router-dom - react - browser router for react

## How to...
- run API - in folder `./KiwiT9/T9_API/` run `npm start`
- run front-end - in folder `./KiwiT9/t9_react` run `npm start`
- run mocha test - in folder `./KiwiT9/T9_API/` run `npm run test`
