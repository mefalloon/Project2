const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    date: Date,
    location: [String],
    needVax: { type: Boolean, default: false }


});
module.exports = mongoose.model('Event', eventSchema);
