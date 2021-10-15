const express = require('express');
const app = express();
const router = express.Router();
const template = require('./template');

router.use('/export', template);
router.use('/test', (req, res) => {
    res.send('test');
})

module.exports = router;
