const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetSchema = new Schema({
    meet_id: {
        type: String,
        unique: true,
        lowercase: true,
    },
    created_by: {
        type: Schema.Types.ObjectId, ref: 'user'
    },
    participants: {
        type: Array
    },
});

const Meet = mongoose.model('meet', meetSchema);
module.exports = Meet;