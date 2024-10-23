const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // To enable CORS for all routes

// username: maglinteangelika
// password: ULHRCgbmSjgHpNaj

mongoose.connect('mongodb+srv://maglinteangelika:ULHRCgbmSjgHpNaj@cluster0.rdkqa.mongodb.net/PagePilot?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

