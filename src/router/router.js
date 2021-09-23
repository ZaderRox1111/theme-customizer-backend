const express = require('express');
const app = express();
const router = express.Router();
const example = require('./example');

router.use('/example', example);

module.exports = router;