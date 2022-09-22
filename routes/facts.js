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
