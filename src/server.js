// fileName: server.js
// Example using Express.js
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'front-end' directory
const frontEndPath = path.join(__dirname, '../../front-end/');
app.use(express.static(frontEndPath));

// Specify routes
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

app.get("/index", (req, res) => {
    res.sendFile(path.join(frontEndPath, 'index.html'));
});

// Specify the port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
