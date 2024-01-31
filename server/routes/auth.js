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

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
}

//Routes
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email, password, role });
        const token = createToken(user._id);
        res.status(200).json({ user: email, token, role });
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
                const token = createToken(user._id);
                res.cookie("token", token, {
                    httpOnly: true,
                }).status(200).json({ user: user.email, token, role: user.role });
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

router.get('/loggedIn', (req, res) => {
    try{
        const token = req.cookies.token;
        if(!token)  return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    }
    catch(err){
        res.json(false);
    }
});

module.exports = router;