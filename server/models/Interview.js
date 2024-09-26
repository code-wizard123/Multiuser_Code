const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
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
    scheduledDateTime: {
        type: Date
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: Schema.Types.ObjectId, ref: 'user'
    },
    interviewer: {
        type: Schema.Types.ObjectId, ref: 'user'
    },
    participants: {
        type: Array
    },
});

const Interview = mongoose.model('interview', interviewSchema);
module.exports = Interview;