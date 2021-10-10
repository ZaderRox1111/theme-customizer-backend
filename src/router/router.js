const express = require('express');
const app = express();
const router = express.Router();
const template = require('./template');

router.use('/export', template);

module.exports = router;
