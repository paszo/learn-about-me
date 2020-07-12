const express = require('express');
const User = require('./models/user');

const router = express.Router();

router.get("/", (req, res, next) => {
    User.find()
        .sort({createdAt: "descending"})
        .exec((err, users) => {
            if(err) {return next(err)}
            res.render('index', {users: users});
        })
})

module.exports = router;