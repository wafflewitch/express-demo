// set up requirements and assign variables
const path = require('path');
const express = require('express');

// invoke express and assign variable
const app = express();

// tell express to make a request
app.get('/', (req, res) => {
  // tell express where to find desired file to serve
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// tell express to serve static files and where to find them
app.use(express.static(path.join(__dirname, 'public')));

// set up port and assign variable
const port = process.env.PORT || 5000;

// tell express which port to listen to
app.listen(port, () => console.log(`Server running on ${port}`));
