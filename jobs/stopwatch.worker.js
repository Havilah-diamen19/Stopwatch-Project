const { CronJob } = require('cron');
const Stopwatch = require('../modules/stopwatch/stopwatch.model');

exports.initStopwatchWorkers = () => {
  console.log('🛠️ Stopwatch workers running');

  const job = new CronJob('0 * * * *', async () => {
    const limit = new Date(Date.now() - 12 * 60 * 60 * 1000);

    const running = await Stopwatch.find({
      status: 'running',
      startedAt: { $lt: limit }
    });

    for (const sw of running) {
      sw.elapsedMs += Date.now() - sw.startedAt;
      sw.startedAt = null;
      sw.status = 'stopped';
      await sw.save();
    }

    console.log(`⏱️ Auto-stopped ${running.length} long-running stopwatches`);
  });

  job.start();
};
