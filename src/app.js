const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/router');
const port = 8000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/server', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}. Access here: http://localhost:${port}`);
})
