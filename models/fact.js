const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { Activity } = require("./activity")

const facts = new Schema({
    facts: {
        type: String
    },
    activityid: {
        type: Schema.Types.ObjectId,
        ref: Activity
    }
},
    { collection: "Facts_1" })

const Facts = mongoose.model('Facts', facts)

module.exports = { Facts }