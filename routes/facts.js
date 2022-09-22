const express = require('express');
const { Facts } = require("../models/fact");
const app = express();
const router = express.Router();

router.post("/:activityid/facts", async (req, res) => {
    try {
        var id = req.params.activityid;
        console.log("actid", req.params.activityid)
        var factInfo = req.body;
        factInfo['activityid'] = id
        var addFacts = new Facts(factInfo);
        console.log("got", addFacts);
        const insertFacts = await addFacts.save();
        res.send(insertFacts);

    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/:activityid/facts", async (req, res) => {
    try {
        const getFact = await Facts.find({ activityid: req.params.activityid });
        res.send(getFact);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.put("/:activityid/facts/:factId", async (req, res) => {
    try {
        const actId = req.params.activityId;
        const factId = req.params.factId;
        const UpdateFact = await Facts.findByIdAndUpdate(factId, req.body, {
            new: true
        });
        res.send(UpdateFact);

    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete("/:activityid/facts/:factId", async (req, res) => {
    try {
        const activityId = req.params.activityId;
        const factid = req.params.factId;
        const deleteFact = await Facts.deleteOne({ _id: factid, activityid: activityId });
        res.send(deleteFact)

    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router




