const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

const User = require('../models/user.js');
const Interview = require('../models/Interview.js');

router.use(require('../middleware/auth.js'));

//Get all Interview Requests for an interviewer
router.get('/requests', async (req, res) => {
    try {
        const interviews = await Interview.find({ interviewer: req.id, isScheduled: false });
        res.json(interviews);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

//Get all scheduled interviews for an interviewer
router.get('/pending', async (req, res) => {
    try {
        const interviews = await Interview.find({ interviewer: req.id, isScheduled: true, isCompleted: false });
        res.json(interviews);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

//Get all completed interviews for an interviewer
router.get('/completed', async (req, res) => {
    try {
        const interviews = await Interview.find({ interviewer: req.id, isCompleted: true });
        res.json(interviews);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;