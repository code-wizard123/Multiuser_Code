const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

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

const createToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.JWT_SECRET, { expiresIn: '3d' });
}

//Routes
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email, password, role });
        const token = createToken(user._id, role);
        res.cookie("token", token).status(200).json({ "message": "User Registered Successfully" });
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
                const token = createToken(user._id, user.role);
                res.cookie("token", token).status(200).json({ "message": "User Logged In successfully" });
            }
            else {
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

router.get('/check', auth, async (req, res) => {
    res.status(200).json({"id": req.id, "role": req.role});
});

module.exports = router;