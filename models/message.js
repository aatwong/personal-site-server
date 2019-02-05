const mongoose = require('mongoose');

const Message = mongoose.model('Message', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    read: {
        type: Boolean
    }
});

module.exports = { Message };