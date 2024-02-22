const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/user.js');
const Interview = require('../models/Interview.js');
const Meet = require('../models/Meet.js');

//Middleware
router.use(require('../middleware/auth.js'));

//Helper Functions
function generateMeetID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomNumber = '';
    for (let i = 0; i < 10; i++) {
        randomNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomNumber;
}

//Routes
router.post('/create', async (req, res) => {
    const interviewee_id = req.id;

    const { startDate, endDate } = req.body;

    const newstartDate = new Date(startDate);
    const newendDate = new Date(endDate);

    if (!newstartDate || !newendDate || newstartDate < new Date() || newendDate < new Date() || newstartDate > newendDate) {
        return res.status(400).json({ message: 'Invalid date' });
    }

    try {
        const interviewee = await User.findById(interviewee_id);

        if (!interviewee || interviewee.role !== 'interviewee') {
            return res.status(404).json({ message: 'Interviewee not found' });
        }

        const interviewers = await User.find({ role: 'interviewer' });
        const int_len = interviewers.length;

        if (int_len === 0) {
            return res.status(404).json({ message: 'No interviewers found' });
        }

        const interviewer = interviewers[Math.floor(Math.random() * int_len)];

        const newInterview = new Interview({
            interviewee, startDate, endDate, interviewer
        });

        const interview = await newInterview.save();
        return res.status(201).json(interview);
    }
    catch (err) {
        res.status(500).json({ 'error': err });
    }
});

router.post('/accept', async (req, res) => {
    const interviewer_id = req.id;
    const { interview_id } = req.body;

    try {
        const interviewer = await User.findById(interviewer_id);

        //Error Handling
        if (!interviewer || interviewer.role !== 'interviewer') {
            return res.status(404).json({ message: 'Interviewer not found' });
        }

        const interview = await Interview.findById(interview_id);

        if (interview.isScheduled || interview.isCompleted) {
            return res.status(400).json({ message: 'Interview already accepted/rejected' });
        }

        if (interview.interviewer.toString() !== interviewer_id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        //Create Meet
        
        const random = generateMeetID();

        while (await Meet.findOne({ meet_id: random })) {
            random = generateMeetID();
        }

        const meet = new Meet({
            meet_id: random,
            created_by: interviewer_id,
            participants: [interview.interviewee, interviewer]
        })

        const newMeet = await meet.save();

        interview.meet = newMeet;
        interview.isScheduled = true;

        await interview.save();

        return res.status(200).json({"meet_id": meet.meet_id});
    }
    catch (err) {
        res.status(500).json({ 'error': err });
    }
});

module.exports = router;