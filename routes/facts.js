const express = require('express');
const { Facts } = require("../models/fact");
const { Activity } = require("../models/activity");
const app = express();
const router = express.Router();

router.post("/:activityid/facts", async (req, res) => {
    try {

        var id = req.params.activityid;
        const activities = await Activity.findById(id);

        if (!activities) {
            res.send("No activity found")
        } else {

            var factInfo = req.body;
            factInfo['activityid'] = id
            var addFacts = new Facts(factInfo);
            console.log("got", addFacts);
            const insertFacts = await addFacts.save();
            res.send(insertFacts);

        }


    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/:activityid/facts", async (req, res) => {
    try {
        var id = req.params.activityid;
        const activities = await Activity.findById(id);

        if (!activities) {
            res.send("No activity found")
        } else {
            const getFact = await Facts.find({ activityid: req.params.activityid });
            res.send(getFact);
        }
    } catch (e) {
        res.status(400).send(e);
    }
})


router.put("/:activityid/facts/:factId", async (req, res) => {
    try {
        var id = req.params.activityid;
        const activities = await Activity.findById(id);
        const factId = req.params.factId;
        if (!activities) {
            res.send("No activity found")
        } else {

            const UpdateFact = await Facts.findByIdAndUpdate(factId, req.body, {
                new: true
            });
            res.send(UpdateFact);
        }

    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete("/:activityid/facts/:factId", async (req, res) => {
    try {
        var id = req.params.activityid;
        const activities = await Activity.findById(id);
        const factid = req.params.factId;
        if (!activities) {
            res.send("No activity found")
        } else {

            const deleteFact = await Facts.deleteOne({ _id: factid, activityid: activityId });
            res.send(deleteFact)
        }

    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router
