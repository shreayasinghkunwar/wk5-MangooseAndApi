const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let activities = new Schema({
    name: {
        type: String
    },
    practice: {
        type: String
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    }
},
    { collection: "Activity_1" }
);

const Activity = mongoose.model('Activity', activities);
module.exports = { Activity };