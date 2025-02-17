import mongoose, { Document } from 'mongoose';
import { TeamStats } from '@/app/fixtures/types';

export interface ILeague extends Omit<TeamStats, '_id'>, Document {}

const LeagueSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  category: { type: String, required: true, enum: ['U12', 'U15'] },
  matchesPlayed: { type: Number, default: 0 },
  won: { type: Number, default: 0 },
  drawn: { type: Number, default: 0 },
  lost: { type: Number, default: 0 },
  goalsFor: { type: Number, default: 0 },
  goalsAgainst: { type: Number, default: 0 },
  goalDifference: { type: Number, default: 0 },
  bonusPoints: { type: Number, default: 0 },
  totalPoints: { type: Number, default: 0 }
});

// Safe way to get/create model
export default mongoose.models.League || mongoose.model<ILeague>('League', LeagueSchema); 