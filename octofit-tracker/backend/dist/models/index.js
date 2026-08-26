import mongoose from 'mongoose';
const resourceSchema = new mongoose.Schema({}, { timestamps: true, strict: false });
export const User = mongoose.models.User || mongoose.model('User', resourceSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', resourceSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', resourceSchema);
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', resourceSchema, 'leaderboard');
export const Workout = mongoose.models.Workout || mongoose.model('Workout', resourceSchema);
