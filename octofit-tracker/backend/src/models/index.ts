import mongoose, { type Model } from 'mongoose';

const resourceSchema = new mongoose.Schema(
  {},
  { timestamps: true, strict: false },
);

export const User: Model<unknown> = mongoose.models.User || mongoose.model('User', resourceSchema);
export const Team: Model<unknown> = mongoose.models.Team || mongoose.model('Team', resourceSchema);
export const Activity: Model<unknown> = mongoose.models.Activity || mongoose.model('Activity', resourceSchema);
export const LeaderboardEntry: Model<unknown> =
  mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', resourceSchema, 'leaderboard');
export const Workout: Model<unknown> = mongoose.models.Workout || mongoose.model('Workout', resourceSchema);
