const express = require('express');

const app = express();

app.use('/todo/add', (req, res) => {
    const result = [
        {add: 12}
    ];
    res.status(200).json(result);
});

module.exports = app;