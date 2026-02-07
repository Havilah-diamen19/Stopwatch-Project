const app = require('./app');
const connectDB = require('./database');
const { initStopwatchWorkers } = require('./jobs/stopwatch.worker');

async function bootstrap() {
  try {
    await connectDB();
    initStopwatchWorkers();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

bootstrap();
