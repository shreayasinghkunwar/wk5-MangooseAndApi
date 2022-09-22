const express = require("express");
const router = express.Router()
const { Activity } = require("../models/activity");
const app = express();

const { connection } = require("../database/db");

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.use(express.json());

router.post("/", async (req, res) => {
    try {

        const addActivity = new Activity(req.body)
        console.log("acti", addActivity);
        console.log(req.body.name);
        const insertActivity = await addActivity.save();
        res.send(insertActivity);
        //res.json("hi")
    } catch (e) {

        res.send(e)
    }

})


router.get("/", async (req, res) => {
    try {

        const getActivity = await Activity.find({});
        res.send(getActivity);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete("/:activityId", (req, res) => {
    try {
        const activityId = req.params.activityId;


        Activity.deleteOne({ _id: activityId }, async (err, res) => {

            const deleteFact = await Fact.deleteMany({ activityid: activityId });

        });
        res.send("Activity has been Deleted ")

    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;