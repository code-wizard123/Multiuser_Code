const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/user.js');

//Helpers
const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    //Validation Errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });

        return errors;
    }

    //Duplicate Email Error
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
        return errors;
    }
}

//Routes
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email, password, role });
        res.status(200).json(user);
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                res.status(200).json({ user: user.email, token });
            }
            else{
                res.status(400).json({ error: 'Incorrect Password' });
            }
        }
        else {
            res.status(400).json({ error: 'User not found' })
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/cookie', (req, res) => {
    res.cookie('user', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    res.send('You got the cookie!');
});

router.get('/readcookie', (req, res) => {
    console.log(req.cookies);
    res.send('You see the cookie!');
});

module.exports = router;