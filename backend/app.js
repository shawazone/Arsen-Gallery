require('dotenv').config();
const cors = require('cors');
// app.js
const express = require('express');
const mongoose = require('mongoose');


const paintingRoutes = require('./routes/paintingRoutes'); // Require the painting routes file
const uploadRoutes = require('./routes/uploadRoutes'); // Require the upload routes file

const app = express();
const PORT = process.env.PORT ;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });
  

app.use(cors());

app.use(express.json());
// Define routes
app.use('/api', paintingRoutes);
app.use('/api', uploadRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
