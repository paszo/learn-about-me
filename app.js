const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

const dbstring = process.env.LEARNABOUTMEDB;
mongoose.connect(dbstring, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})