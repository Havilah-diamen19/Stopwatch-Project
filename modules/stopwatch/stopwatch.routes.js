const express = require('express');
const controller = require('./stopwatch.controller');

const router = express.Router();

router.post('/', controller.create);
router.post('/:id/start', controller.start);
router.post('/:id/pause', controller.pause);
router.get('/:id', controller.getOne);

module.exports = router;
