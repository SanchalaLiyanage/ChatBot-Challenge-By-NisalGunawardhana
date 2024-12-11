// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();
const PORT = 3000; // Define the port to run the server

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Chatbot endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message; // Extract user message from the request body

  if (!userMessage) {
    // If no message is provided, return a 400 error
    return res.status(400).json({ error: 'Message is required' });
  }

  // Simple chatbot response logic
  let botResponse;
  if (userMessage.toLowerCase().includes('hello')) {
    botResponse = 'Hi there! How can I help you today?';
  } else if (userMessage.toLowerCase().includes('how are you')) {
    botResponse = 'I’m just a bot, but I’m doing great! How about you?';
  } else if (userMessage.toLowerCase().includes('colors')) {
    botResponse = 'Some great colors for clothing are blue, black, and white. Do you need more suggestions?';
  } else {
    botResponse = `You said: ${userMessage}`;
  }

  // Respond to the user
  res.json({ response: botResponse });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Chatbot server is running on http://localhost:${PORT}`);
});
