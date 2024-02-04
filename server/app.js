const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

const Match = require("./Match");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kshitijg:65p31pMH8LdOgAvq@cluster0.1vkr70l.mongodb.net/football?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("DB connection established successfully.");
  });

app.post("/createMatch", async (req, res) => {
  try {
    const body = req.body;
    const match = await Match.create(body);

    res.status(201).json({ message: "success", match });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/getAllTeams", async (req, res) => {
  try {
    const matches = await Match.find();

    res.status(200).json({ message: "success", matches: matches });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/getMatchStats/:matchId", async (req, res) => {
  try {
    const id = req.params.matchId;
    const match = await Match.find({ matchId: id });

    res.status(200).json({ message: "success", match: match });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
