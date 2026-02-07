const mongoose = require('mongoose');

const stopwatchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },

  name: {
    type: String,
    default: 'My Stopwatch'
  },

  status: {
    type: String,
    enum: ['idle', 'running', 'paused', 'stopped'],
    default: 'idle'
  },

  startedAt: {
    type: Date,
    default: null
  },

  elapsedMs: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Stopwatch', stopwatchSchema);
