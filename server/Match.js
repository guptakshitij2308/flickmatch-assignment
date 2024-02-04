const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  matchId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stats: {
    teamA: {
      goals: String,
      possession: String,
      passes: String,
      shots: String,
      shotsOnTarget: String,
      corners: String,
    },
    teamB: {
      goals: String,
      possession: String,
      passes: String,
      shots: String,
      shotsOnTarget: String,
      corners: String,
    },
  },
});

// Create the model
const Match = mongoose.model("Match", matchSchema);
module.exports = Match;
