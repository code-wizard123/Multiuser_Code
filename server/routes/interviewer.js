const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/user.js');
const Meet = require('../models/Meet.js');

//Middleware
router.use(require('../middleware/auth.js'));

//Routes
router.post('/create', async (req, res) => {
    const user = await User.findById(req.id);
    const { interviewee_id } = req.body;

    try {
        if (user.role === 'interviewer') {
            const meet_id = Math.random().toString(36).substr(2, 12);

            const meet = new Meet({
                meet_id: meet_id,
                created_by: user._id,
                participants: [interviewee_id, user._id]
            });

            await meet.save();
            return res.status(200).json({ message: 'Meet created', meet_id: meet_id });
        }
        else {
            return res.status(401).json({ message: 'You are not an interviewer' });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;