const { initStopwatchWorkers } = require('./stopwatch.worker');

module.exports = () => {
  initStopwatchWorkers();
};
