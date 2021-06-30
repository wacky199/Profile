const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileMessagesSchema = new Schema({
    name: String,
    email: String,
    message: String,
    time: String,
});

const ProfileMessage = mongoose.model('Recieved Messages', ProfileMessagesSchema);

module.exports = ProfileMessage;
