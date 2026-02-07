const Stopwatch = require('./stopwatch.model');
const service = require('./stopwatch.service');

exports.create = async (req, res) => {
  const stopwatch = await Stopwatch.create({
    userId: req.user.id,
    name: req.body.name
  });

  res.status(201).json(stopwatch);
};

exports.start = async (req, res) => {
  const stopwatch = await Stopwatch.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!stopwatch) return res.status(404).json({ error: 'Not found' });

  await service.start(stopwatch);

  res.json({ message: 'Started' });
};

exports.pause = async (req, res) => {
  const stopwatch = await Stopwatch.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  await service.pause(stopwatch);
  res.json({ message: 'Paused' });
};

exports.getOne = async (req, res) => {
  const stopwatch = await Stopwatch.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  const elapsed = service.getElapsedTime(stopwatch);

  res.json({
    ...stopwatch.toObject(),
    elapsedMs: elapsed
  });
};
