const mongoose = require('mongoose');
const {Message} = require('../models/message');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Feedback', { useNewUrlParser: true });

module.exports = {mongoose};

// var newMessage = new Message({
//     text: 'a mongoose message',
//     timestamp: Date.now(),
//     read: false

// });

// newMessage.save().then((doc) => {
//     console.log('Saved message', doc);
// }, (e) => {
//     console.lob('Unable to save message')
// });