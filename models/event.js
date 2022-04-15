const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        enum: ['Chilling' , 'House on fire'],
        required: true
    },

    description: {
        type: String,
        required: false
    },

    // completed: { 
    //     type: Boolean,
    //     default: false 
    // },

    schedule: {
		type: Date,
		default: function() {
			let d = new Date();
			let year = d.getFullYear();
			let month = d.getMonth();
			let day = d.getDate();
			let result = new Date(year + 1, month, day);
			return result;
		}
	},

});
module.exports = mongoose.model('Event', eventSchema);


// } String,
// img: String,
// date: Date,
// location: [String],
// RSVP: { type: Boolean, default: false }


