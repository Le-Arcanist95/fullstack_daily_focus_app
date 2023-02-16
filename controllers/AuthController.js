const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, existingUser) => {
        const { username, password, email } = req.body;
        if(err) {
            res.status(500);
            return next(err);
        };
        if(existingUser !== null) {
            res.status(403);
            return next(new Error('That username already exists!'));
        };
        if(!username || !password || !email) {
            res.status(403);
            return next(new Error('Please fill out all the fields!'));
        };

        const newUser = new User({ username, password, email });
        newUser.save();
        return res.status(201).send({ user: savedUser.withoutPassword() });
    });
};

// Login a user
exports.login = (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, foundUser) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        if(!foundUser) {
            res.status(403);
            return next(new Error('Username or password are incorrect!'));
        };
        foundUser.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(403);
                return next(new Error('Username or password are incorrect!'));
            };
            if(!isMatch) {
                res.status(403);
                return next(new Error('Username or password are incorrect!'));
            };
            const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET);
            return res.status(200).send({ token, user: foundUser.withoutPassword() });
        });
    });
};