import mongoose from 'mongoose';

const TeamStatsSchema = new mongoose.Schema({
  teamName: String,
  matchesPlayed: Number,
  won: Number,
  drawn: Number,
  lost: Number,
  goalsFor: Number,
  goalsAgainst: Number,
  goalDifference: Number,
  bonusPoints: Number,
  totalPoints: Number,
  category: {
    type: String,
    enum: ['U12', 'U15'],
    required: true
  }
});

export const Team = mongoose.models.Team || mongoose.model('Team', TeamStatsSchema); 