const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const authRoutes = require('./auth/auth.routes');
const stopwatchRoutes = require('./modules/stopwatch/stopwatch.routes');
const auth = require('./auth/auth.middleware');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/stopwatches', auth, stopwatchRoutes);

module.exports = app;
