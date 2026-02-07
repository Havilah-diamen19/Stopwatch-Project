const Stopwatch = require('./stopwatch.model');

const now = () => new Date();

exports.start = async (stopwatch) => {
  if (!['idle', 'paused'].includes(stopwatch.status)) {
    throw new Error('Stopwatch cannot be started');
  }

  stopwatch.startedAt = now();
  stopwatch.status = 'running';
  await stopwatch.save();
};

exports.pause = async (stopwatch) => {
  if (stopwatch.status !== 'running') {
    throw new Error('Stopwatch is not running');
  }

  stopwatch.elapsedMs += now() - stopwatch.startedAt;
  stopwatch.startedAt = null;
  stopwatch.status = 'paused';

  await stopwatch.save();
};

exports.stop = async (stopwatch) => {
  if (stopwatch.status === 'running') {
    stopwatch.elapsedMs += now() - stopwatch.startedAt;
  }

  stopwatch.startedAt = null;
  stopwatch.status = 'stopped';

  await stopwatch.save();
};

exports.getElapsedTime = (stopwatch) => {
  if (stopwatch.status === 'running') {
    return stopwatch.elapsedMs + (now() - stopwatch.startedAt);
  }
  return stopwatch.elapsedMs;
};
