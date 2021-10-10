const express = require('express');
const router = express.Router();
const { getTemplate } = require('../util/getTemplate');

router.post('/', (req, res) => {
    const template = getTemplate(req.body.c1,
        req.body.c2, 
        req.body.c3, 
        req.body.c4, 
        req.body.c5, 
        req.body.c6, 
        req.body.c7, 
        req.body.c8, 
        req.body.c9, 
        req.body.c10, 
        req.body.c11, 
        req.body.c12, 
        req.body.c13, 
        req.body.c14
        );
    res.json(template);
});

module.exports = router;
