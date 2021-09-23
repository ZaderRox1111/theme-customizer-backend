const express = require('express');
const app = express();
const router = require('./router/router');
const port = 84363;

app.use('/server', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})