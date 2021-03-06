const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now },
    displayName: String,
    bio: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;