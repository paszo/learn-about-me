const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

const dbstring = process.env.LEARNABOUTMEDB;

mongoose.connect(dbstring, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})