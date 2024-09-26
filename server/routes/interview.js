const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth.js');

//Models
const User = require('../models/user.js');
const Interview = require('../models/Interview.js');

//Middleware
router.use(require('../middleware/auth.js'));

//Routes
router.post('/create', async (req, res) => {
    if(req.role !== 'interviewee'){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const interviewee_id = req.id;

    const { startDate, endDate } = req.body;

    const newstartDate = new Date(startDate);
    const newendDate = new Date(endDate);

    if (!newstartDate || !newendDate || newstartDate < new Date() || newendDate < new Date() || newstartDate > newendDate) {
        return res.status(400).json({ message: 'Invalid date' });
    }

    try {
        const interviewee = await User.findById(interviewee_id);

        if (!interviewee) {
            return res.status(404).json({ message: 'Interviewee not found' });
        }

        const interviewers = await User.find({ role: 'interviewer' });
        const int_len = interviewers.length;

        if (int_len === 0) {
            return res.status(404).json({ message: 'No interviewers found' });
        }

        const interviewer = interviewers[Math.floor(Math.random() * int_len)];

        const newInterview = new Interview({
            startDate: newstartDate,
            endDate: newendDate,
            created_by: interviewee_id,
            participants: [interviewee_id, interviewer._id],
            interviewer
        });

        const interview = await newInterview.save();
        return res.status(200).json(interview);
    }
    catch (err) {
        res.status(500).json({ 'error': err });
    }
});

router.post('/accept/:id', async (req, res) => {
    const interviewer_id = req.id;
    const { id } = req.params;

    try {
        const interviewer = await User.findById(interviewer_id);

        //Error Handling
        if (!interviewer) {
            return res.status(404).json({ message: 'Interviewer not found' });
        }

        
        if (interviewer.role !== 'interviewer') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        const interview = await Interview.findById(id);
        
        if (interview.isScheduled) {
            return res.status(400).json({ message: 'Interview already Scheduled' });
        }
        
        if (interview.isCompleted) {
            return res.status(400).json({ message: 'Interview already Completed' });
        }

        if (interview.interviewer.toString() !== interviewer_id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        interview.isScheduled = true;

        await interview.save();
        return res.status(200).json({"message": "Interview Scheduled"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ 'error': err });
    }
});

//Routes
router.post('/join/:id', async (req, res) => {
    const user = await User.findById(req.id);
    const { id } = req.params;

    try {
        const interview = await Interview.findById(id);

        if (interview) {
            if(!interview.isScheduled){
                return res.status(400).json({ message: 'Interview not Scheduled' });
            }

            if(interview.isCompleted){
                return res.status(400).json({ message: 'Interview already Completed' });
            }

            if(interview.participants.includes(user._id)){
                return res.status(200).json({ allow: true });
            }
            else{
                return res.status(200).json({ allow: false });
            }
        }
        else {
            return res.status(404).json({ message: 'Interview not Found' });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;