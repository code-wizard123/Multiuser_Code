const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/user.js');

//Middleware
const auth = require('../middleware/auth.js');

router.use(auth);

//Routes
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'You are an interviewer' });
});

module.exports = router;