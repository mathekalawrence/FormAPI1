//API with Express
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //Parses the JSON body

//api route to handle form submission
app.post("/api/submit", (req, res) => {
    const { username, password } = req.body;
    console.log("Well received..:", username, password);

    //Responding to client
    res.json({ message: `Congratulations, ${username}! Your info received.` });

});

app.listen(5500, () => console.log("My API running on port 5500"));