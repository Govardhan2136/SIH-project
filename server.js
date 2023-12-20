const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory database for testing (replace with a real database in production)
const users = [];

// Endpoint for user sign-up
app.post('/api/signup', (req, res) => {
  const { name, username, password } = req.body;
  
  // Basic validation (you should add more robust validation in production)
  if (!name || !username || !password) {
    return res.status(400).json({ success: false, message: 'Incomplete data' });
  }

  // Check if the username is already taken
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ success: false, message: 'Username is already taken' });
  }

  // Store the user in memory (replace with database storage in production)
  users.push({ name, username, password });
  
  res.status(201).json({ success: true, message: 'Sign-up successful' });
});

// Endpoint for user sign-in
app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;

  // Basic validation (you should add more robust validation in production)
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Incomplete data' });
  }

  // Check if the user exists in memory (replace with database query in production)
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }

  res.status(200).json({ success: true, message: 'Authentication successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
