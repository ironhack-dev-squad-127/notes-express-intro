// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
// Example with "public/images/cool-cat.jpg"
// ======> http://localhost:3000/images/cool-cat.jpg (without public)
app.use(express.static('public'));

// our first Route: http://localhost:3000/
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// our second Route: http://localhost:3000/carrot
app.get('/carrot', (request, response, next) => {
  response.send('<h1>Hi, I am a carrot 🥕💪</h1>');
});

// Route: http://localhost:3000/cat
app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});