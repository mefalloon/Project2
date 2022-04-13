const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    img: String,
    date: Date,
    location: [String],
    RSVP: { type: Boolean, default: false }


});
module.exports = mongoose.model('Event', eventSchema);
