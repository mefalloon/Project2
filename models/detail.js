const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    eventName: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'event'
   },

    image: {
        type: String,
        required: true
    },


    decription: {
        type: String,
        required: true
    },

    location: {
        type: [String],
        required: true
    },

    date: {
        type: Date,
        required: true
    },

});
module.exports = mongoose.model('Detail', detailSchema);