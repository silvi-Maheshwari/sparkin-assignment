require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const actionRoutes = require('./routes/actionRoutes');
const policyRoutes = require('./routes/policyRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/actions', actionRoutes);
app.use('/api/policy', policyRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
