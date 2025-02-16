import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
  time: String,
  team1: String,
  score1: mongoose.Schema.Types.Mixed,
  team2: String,
  score2: mongoose.Schema.Types.Mixed
});

interface IFixture {
  date: string;
  displayDate?: string;
  timestamp?: number;
  matches: any[];
  category: 'U12' | 'U15';
}

const FixtureSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  displayDate: String,
  timestamp: Number,
  matches: [MatchSchema],
  category: {
    type: String,
    enum: ['U12', 'U15'],
    required: true
  }
});

// Pre-save middleware to set timestamp
FixtureSchema.pre('save', function(this: mongoose.Document & IFixture, next) {
  const months: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };

  try {
    const [day, month] = this.date.split(' ');
    const dayNum = parseInt(day.replace(/\D/g, ''));
    const monthNum = months[month];

    if (isNaN(dayNum) || monthNum === undefined) {
      throw new Error('Invalid date format');
    }

    this.timestamp = new Date(2024, monthNum, dayNum).getTime();
    next();
  } catch (error) {
    next(error as Error);
  }
});

export const Fixture = mongoose.models.Fixture || mongoose.model('Fixture', FixtureSchema);