const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    interviewee: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    interviewer: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isScheduled: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    meet: {
        type: Schema.Types.ObjectId,
        ref: 'meet'
    }
});

const Interview = mongoose.model('interview', interviewSchema);
module.exports = Interview;