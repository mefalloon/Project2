const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },

    location: {
        type: [String],
        required: false
    }


});
module.exports = mongoose.model('Event', eventSchema);


// } String,
// img: String,
// date: Date,
// location: [String],
// RSVP: { type: Boolean, default: false }