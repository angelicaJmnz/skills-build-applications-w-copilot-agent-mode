import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        await User.insertMany([
            { username: 'alex', email: 'alex@example.com', displayName: 'Alex Morgan', goal: 'Build endurance' },
            { username: 'jamie', email: 'jamie@example.com', displayName: 'Jamie Lee', goal: 'Increase strength' },
        ]);
        await Team.insertMany([
            { name: 'Summit Striders', members: ['alex', 'jamie'], weeklyGoalMinutes: 240 },
            { name: 'Core Crew', members: ['jamie'], weeklyGoalMinutes: 180 },
        ]);
        await Activity.insertMany([
            { username: 'alex', type: 'run', durationMinutes: 35, calories: 320, completedAt: new Date('2026-08-24T07:30:00Z') },
            { username: 'jamie', type: 'cycling', durationMinutes: 45, calories: 410, completedAt: new Date('2026-08-25T17:00:00Z') },
        ]);
        await LeaderboardEntry.insertMany([
            { username: 'alex', points: 860, rank: 1, period: 'weekly' },
            { username: 'jamie', points: 740, rank: 2, period: 'weekly' },
        ]);
        await Workout.insertMany([
            { title: 'Endurance Builder', category: 'cardio', difficulty: 'intermediate', durationMinutes: 30, exercises: ['Warm-up jog', 'Intervals', 'Cool-down'] },
            { title: 'Full Body Foundation', category: 'strength', difficulty: 'beginner', durationMinutes: 25, exercises: ['Squats', 'Push-ups', 'Plank'] },
        ]);
        console.log('Database seeding complete');
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
    finally {
        await mongoose.disconnect();
    }
}
seedDatabase();
