

const { connection } = require("./database/db")
const express = require("express")
const app = express();
const port = process.env.PORT || 6000;

const activity = require("./routes/activity");
const fact = require('./routes/facts')

app.use(express.json());

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.use('/activity', activity);
app.use('/activity', fact)


app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})
