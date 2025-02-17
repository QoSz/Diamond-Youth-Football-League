import mongoose, { Document } from 'mongoose';
import { Match } from '@/app/fixtures/types';

export interface IFixture extends Document {
  date: string;
  category: 'U12' | 'U15';
  matches: Match[];
}

const MatchSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  time: { type: String, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  score1: { type: String, default: null },
  score2: { type: String, default: null }
});

const FixtureSchema = new mongoose.Schema({
  date: { type: String, required: true },
  category: { type: String, required: true, enum: ['U12', 'U15'] },
  matches: [MatchSchema]
});

// Safe way to get/create model
export default mongoose.models.Fixture || mongoose.model<IFixture>('Fixture', FixtureSchema); 