const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const server = require('./routes/server');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // lowercase 'origin' and fixed the string syntax
};

app.use(cors(corsOptions)); // lowercase 'app' and use correct variable

const port = 5001;

db.connect((err) => {
  if (err) { // lowercase 'if'
    throw err;
  }
  console.log('Connected to database MYSQL'); // lowercase 'console' and use correct string syntax
});

app.use(express.json());

// LOGGING MIDDLEWARE
app.use((req, res, next) => {
  const now = new Date(); // lowercase 'const'
  console.log(`[${now}] Method: ${req.method} ${req.url}`); // lowercase 'console'
  next(); // lowercase 'next'
});

app.get('/', (req, res) => {
  res.send('Hello W!!!'); // lowercase 'res' and use correct string syntax
});

app.use('/servers', server); // lowercase 'app' and use correct path string syntax

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // lowercase 'console'
  res.status(500).send('Something went wrong!'); // lowercase 'res' and use correct string syntax
});

app.listen(port, () => {
  console.log('Server is running on port: ' + port); // lowercase 'console' and use correct string syntax
});
