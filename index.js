// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const app = express();

const {PORT, HOST} = process.env;

app.get('/b', (req, res) => {
    res.send("3");
});

app.listen(PORT, () => console.log(`service3 listening at ${HOST}:${PORT}`));