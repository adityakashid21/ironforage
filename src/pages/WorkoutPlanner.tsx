import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, Calendar, TrendingUp, Zap, Heart, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const WorkoutPlanner = () => {
    const [selectedGoal, setSelectedGoal] = useState<string>("");
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const [workoutPlan, setWorkoutPlan] = useState<any>(null);

    const workoutPrograms: any = {
        "muscle-gain": {
            beginner: {
                name: "Beginner Muscle Building",
                duration: "8 weeks",
                frequency: "3 days/week",
                schedule: {
                    "Day 1": {
                        name: "Full Body A",
                        exercises: [
                            { name: "Barbell Squat", sets: 3, reps: "8-10", rest: "2 min" },
                            { name: "Bench Press", sets: 3, reps: "8-10", rest: "2 min" },
                            { name: "Bent Over Row", sets: 3, reps: "8-10", rest: "2 min" },
                            { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                            { name: "Tricep Dips", sets: 3, reps: "8-10", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Rest or Light Cardio",
                        exercises: [
                            { name: "Walking", sets: 1, reps: "30 min", rest: "-" },
                            { name: "Stretching", sets: 1, reps: "15 min", rest: "-" },
                        ],
                    },
                    "Day 3": {
                        name: "Full Body B",
                        exercises: [
                            { name: "Deadlift", sets: 3, reps: "6-8", rest: "2 min" },
                            { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Pull-ups (Assisted)", sets: 3, reps: "6-8", rest: "2 min" },
                            { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                            { name: "Overhead Tricep Extension", sets: 3, reps: "10-12", rest: "60 sec" },
                        ],
                    },
                },
            },
            intermediate: {
                name: "Intermediate Hypertrophy",
                duration: "12 weeks",
                frequency: "4 days/week",
                schedule: {
                    "Day 1": {
                        name: "Chest & Triceps",
                        exercises: [
                            { name: "Flat Barbell Bench Press", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
                            { name: "Dips", sets: 3, reps: "8-12", rest: "90 sec" },
                            { name: "Close Grip Bench Press", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
                            { name: "Overhead Cable Extension", sets: 3, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Back & Biceps",
                        exercises: [
                            { name: "Deadlift", sets: 4, reps: "6-8", rest: "2-3 min" },
                            { name: "Pull-ups", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Barbell Row", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                            { name: "Concentration Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Legs & Abs",
                        exercises: [
                            { name: "Barbell Squat", sets: 4, reps: "8-10", rest: "2-3 min" },
                            { name: "Romanian Deadlift", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Leg Press", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
                            { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
                            { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60 sec" },
                            { name: "Plank", sets: 3, reps: "60 sec", rest: "60 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Shoulders & Arms",
                        exercises: [
                            { name: "Overhead Press", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60 sec" },
                            { name: "Front Raises", sets: 3, reps: "12-15", rest: "60 sec" },
                            { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "10-12", rest: "60 sec" },
                            { name: "Tricep Dips", sets: 3, reps: "10-12", rest: "60 sec" },
                        ],
                    },
                },
            },
            advanced: {
                name: "Advanced Mass Builder",
                duration: "16 weeks",
                frequency: "5-6 days/week",
                schedule: {
                    "Day 1": {
                        name: "Chest (Power)",
                        exercises: [
                            { name: "Flat Barbell Bench Press", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Incline Barbell Press", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Weighted Dips", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Dumbbell Flyes", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Cable Crossover", sets: 3, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Back (Power)",
                        exercises: [
                            { name: "Deadlift", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "T-Bar Row", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Legs (Power)",
                        exercises: [
                            { name: "Barbell Squat", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Front Squat", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Romanian Deadlift", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Leg Press", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12/leg", rest: "90 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Shoulders & Arms",
                        exercises: [
                            { name: "Overhead Press", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Dumbbell Lateral Raise", sets: 4, reps: "12-15", rest: "60 sec" },
                            { name: "Barbell Curl", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Close Grip Bench", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Hammer Curls", sets: 3, reps: "10-12", rest: "60 sec" },
                            { name: "Skull Crushers", sets: 3, reps: "10-12", rest: "60 sec" },
                        ],
                    },
                    "Day 5": {
                        name: "Chest & Back (Hypertrophy)",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Cable Flyes", sets: 4, reps: "12-15", rest: "60 sec" },
                            { name: "Lat Pulldown", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Seated Cable Row", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Dumbbell Pullover", sets: 3, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                },
            },
        },
        "fat-loss": {
            beginner: {
                name: "Beginner Fat Loss",
                duration: "8 weeks",
                frequency: "4 days/week",
                schedule: {
                    "Day 1": {
                        name: "Full Body Circuit",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 3, reps: "15-20", rest: "30 sec" },
                            { name: "Push-ups", sets: 3, reps: "10-15", rest: "30 sec" },
                            { name: "Dumbbell Rows", sets: 3, reps: "12-15", rest: "30 sec" },
                            { name: "Lunges", sets: 3, reps: "12/leg", rest: "30 sec" },
                            { name: "Plank", sets: 3, reps: "30-45 sec", rest: "30 sec" },
                            { name: "Jumping Jacks", sets: 3, reps: "30 sec", rest: "30 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Cardio & Core",
                        exercises: [
                            { name: "Treadmill Intervals", sets: 1, reps: "20 min", rest: "-" },
                            { name: "Mountain Climbers", sets: 3, reps: "30 sec", rest: "30 sec" },
                            { name: "Bicycle Crunches", sets: 3, reps: "20", rest: "30 sec" },
                            { name: "Russian Twists", sets: 3, reps: "20", rest: "30 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Upper Body",
                        exercises: [
                            { name: "Dumbbell Bench Press", sets: 3, reps: "12-15", rest: "45 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12-15", rest: "45 sec" },
                            { name: "Shoulder Press", sets: 3, reps: "12-15", rest: "45 sec" },
                            { name: "Bicep Curls", sets: 3, reps: "15", rest: "30 sec" },
                            { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "30 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Lower Body & HIIT",
                        exercises: [
                            { name: "Goblet Squats", sets: 3, reps: "15", rest: "45 sec" },
                            { name: "Deadlifts", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Step-ups", sets: 3, reps: "12/leg", rest: "45 sec" },
                            { name: "Burpees", sets: 3, reps: "10", rest: "60 sec" },
                            { name: "High Knees", sets: 3, reps: "30 sec", rest: "30 sec" },
                        ],
                    },
                },
            },
            intermediate: {
                name: "Intermediate Fat Shredder",
                duration: "10 weeks",
                frequency: "5 days/week",
                schedule: {
                    "Day 1": {
                        name: "HIIT & Strength",
                        exercises: [
                            { name: "Barbell Squat", sets: 4, reps: "12-15", rest: "60 sec" },
                            { name: "Box Jumps", sets: 4, reps: "10", rest: "45 sec" },
                            { name: "Kettlebell Swings", sets: 4, reps: "20", rest: "45 sec" },
                            { name: "Battle Ropes", sets: 4, reps: "30 sec", rest: "30 sec" },
                            { name: "Burpees", sets: 4, reps: "12", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Upper Body Circuit",
                        exercises: [
                            { name: "Bench Press", sets: 4, reps: "12-15", rest: "45 sec" },
                            { name: "Pull-ups", sets: 4, reps: "8-12", rest: "60 sec" },
                            { name: "Dumbbell Rows", sets: 4, reps: "12-15", rest: "45 sec" },
                            { name: "Push-ups", sets: 4, reps: "15-20", rest: "30 sec" },
                            { name: "Plank to Push-up", sets: 3, reps: "10", rest: "45 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Cardio Blast",
                        exercises: [
                            { name: "Rowing Machine", sets: 5, reps: "2 min", rest: "1 min" },
                            { name: "Assault Bike", sets: 5, reps: "1 min", rest: "1 min" },
                            { name: "Jump Rope", sets: 5, reps: "1 min", rest: "30 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Lower Body Power",
                        exercises: [
                            { name: "Deadlift", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 4, reps: "15/leg", rest: "60 sec" },
                            { name: "Leg Press", sets: 4, reps: "15-20", rest: "60 sec" },
                            { name: "Jump Squats", sets: 4, reps: "12", rest: "60 sec" },
                            { name: "Sled Push", sets: 4, reps: "30 sec", rest: "90 sec" },
                        ],
                    },
                    "Day 5": {
                        name: "Full Body Metabolic",
                        exercises: [
                            { name: "Thrusters", sets: 5, reps: "15", rest: "60 sec" },
                            { name: "Renegade Rows", sets: 4, reps: "10/side", rest: "45 sec" },
                            { name: "Mountain Climbers", sets: 4, reps: "30 sec", rest: "30 sec" },
                            { name: "Medicine Ball Slams", sets: 4, reps: "15", rest: "45 sec" },
                            { name: "Farmer's Walk", sets: 3, reps: "40m", rest: "60 sec" },
                        ],
                    },
                },
            },
            advanced: {
                name: "Advanced Fat Incinerator",
                duration: "12 weeks",
                frequency: "6 days/week",
                schedule: {
                    "Day 1": {
                        name: "Strength & Conditioning",
                        exercises: [
                            { name: "Clean and Press", sets: 5, reps: "8", rest: "90 sec" },
                            { name: "Front Squat", sets: 5, reps: "10", rest: "90 sec" },
                            { name: "Pull-ups", sets: 5, reps: "Max", rest: "60 sec" },
                            { name: "Burpee Box Jumps", sets: 4, reps: "10", rest: "60 sec" },
                            { name: "Assault Bike Sprints", sets: 6, reps: "30 sec", rest: "30 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "HIIT Circuit",
                        exercises: [
                            { name: "Kettlebell Swings", sets: 5, reps: "25", rest: "30 sec" },
                            { name: "Battle Ropes", sets: 5, reps: "40 sec", rest: "20 sec" },
                            { name: "Box Jumps", sets: 5, reps: "15", rest: "30 sec" },
                            { name: "Rowing Sprints", sets: 5, reps: "250m", rest: "60 sec" },
                            { name: "Sled Pushes", sets: 5, reps: "40m", rest: "90 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Upper Body Strength",
                        exercises: [
                            { name: "Bench Press", sets: 5, reps: "8-10", rest: "2 min" },
                            { name: "Weighted Pull-ups", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Overhead Press", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Barbell Row", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Dips", sets: 3, reps: "Max", rest: "60 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Lower Body Power",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "8-10", rest: "2 min" },
                            { name: "Deadlift", sets: 5, reps: "8", rest: "2 min" },
                            { name: "Bulgarian Split Squats", sets: 4, reps: "12/leg", rest: "90 sec" },
                            { name: "Leg Press", sets: 4, reps: "15", rest: "60 sec" },
                            { name: "Prowler Pushes", sets: 5, reps: "40m", rest: "2 min" },
                        ],
                    },
                    "Day 5": {
                        name: "Metabolic Conditioning",
                        exercises: [
                            { name: "Thrusters", sets: 6, reps: "15", rest: "45 sec" },
                            { name: "Burpees", sets: 6, reps: "15", rest: "45 sec" },
                            { name: "Kettlebell Snatches", sets: 5, reps: "10/side", rest: "60 sec" },
                            { name: "Jump Rope Double Unders", sets: 5, reps: "30", rest: "30 sec" },
                            { name: "Farmer's Carry", sets: 4, reps: "60m", rest: "90 sec" },
                        ],
                    },
                    "Day 6": {
                        name: "Active Recovery & Core",
                        exercises: [
                            { name: "Light Jogging", sets: 1, reps: "20 min", rest: "-" },
                            { name: "Hanging Leg Raises", sets: 4, reps: "15", rest: "60 sec" },
                            { name: "Ab Wheel Rollouts", sets: 4, reps: "12", rest: "60 sec" },
                            { name: "Plank Variations", sets: 4, reps: "60 sec", rest: "45 sec" },
                            { name: "Stretching", sets: 1, reps: "15 min", rest: "-" },
                        ],
                    },
                },
            },
        },
        strength: {
            beginner: {
                name: "Beginner Strength Foundation",
                duration: "12 weeks",
                frequency: "3 days/week",
                schedule: {
                    "Day 1": {
                        name: "Squat Focus",
                        exercises: [
                            { name: "Barbell Back Squat", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "8", rest: "2 min" },
                            { name: "Leg Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Plank", sets: 3, reps: "45 sec", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Bench Focus",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Barbell Row", sets: 5, reps: "5", rest: "2 min" },
                            { name: "Overhead Press", sets: 3, reps: "8", rest: "2 min" },
                            { name: "Face Pulls", sets: 3, reps: "15", rest: "60 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Deadlift Focus",
                        exercises: [
                            { name: "Conventional Deadlift", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Front Squat", sets: 3, reps: "8", rest: "2 min" },
                            { name: "Pull-ups (Assisted)", sets: 3, reps: "5-8", rest: "2 min" },
                            { name: "Hanging Leg Raises", sets: 3, reps: "10", rest: "60 sec" },
                        ],
                    },
                },
            },
            intermediate: {
                name: "Intermediate Powerlifting",
                duration: "16 weeks",
                frequency: "4 days/week",
                schedule: {
                    "Day 1": {
                        name: "Squat (Heavy)",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "3-5", rest: "3-4 min" },
                            { name: "Pause Squat", sets: 3, reps: "5", rest: "3 min" },
                            { name: "Front Squat", sets: 3, reps: "6-8", rest: "2 min" },
                            { name: "Leg Curls", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Ab Wheel", sets: 3, reps: "10", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Bench (Heavy)",
                        exercises: [
                            { name: "Bench Press", sets: 5, reps: "3-5", rest: "3-4 min" },
                            { name: "Close Grip Bench", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Incline Press", sets: 3, reps: "8-10", rest: "2 min" },
                            { name: "Barbell Row", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Face Pulls", sets: 4, reps: "15-20", rest: "60 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Deadlift (Heavy)",
                        exercises: [
                            { name: "Conventional Deadlift", sets: 5, reps: "3-5", rest: "3-4 min" },
                            { name: "Deficit Deadlift", sets: 3, reps: "5", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "8", rest: "2 min" },
                            { name: "Pull-ups", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Overhead Press & Accessories",
                        exercises: [
                            { name: "Overhead Press", sets: 5, reps: "5", rest: "3 min" },
                            { name: "Push Press", sets: 3, reps: "6-8", rest: "2 min" },
                            { name: "Dumbbell Bench", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "90 sec" },
                            { name: "Lateral Raises", sets: 4, reps: "15", rest: "60 sec" },
                        ],
                    },
                },
            },
            advanced: {
                name: "Advanced Powerlifting Program",
                duration: "20 weeks",
                frequency: "5 days/week",
                schedule: {
                    "Day 1": {
                        name: "Squat (Heavy)",
                        exercises: [
                            { name: "Competition Squat", sets: 6, reps: "2-3", rest: "4-5 min" },
                            { name: "Pause Squat", sets: 4, reps: "3-5", rest: "3 min" },
                            { name: "Front Squat", sets: 4, reps: "5-6", rest: "2 min" },
                            { name: "Bulgarian Split Squat", sets: 3, reps: "8/leg", rest: "90 sec" },
                            { name: "Leg Curls", sets: 4, reps: "12-15", rest: "60 sec" },
                        ],
                    },
                    "Day 2": {
                        name: "Bench (Heavy)",
                        exercises: [
                            { name: "Competition Bench", sets: 6, reps: "2-3", rest: "4-5 min" },
                            { name: "Spoto Press", sets: 4, reps: "4-6", rest: "3 min" },
                            { name: "Close Grip Bench", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "2 min" },
                            { name: "Barbell Row", sets: 4, reps: "8-10", rest: "90 sec" },
                        ],
                    },
                    "Day 3": {
                        name: "Deadlift (Heavy)",
                        exercises: [
                            { name: "Competition Deadlift", sets: 6, reps: "2-3", rest: "4-5 min" },
                            { name: "Deficit Deadlift", sets: 4, reps: "4-5", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "2 min" },
                            { name: "Pendlay Row", sets: 4, reps: "8-10", rest: "90 sec" },
                        ],
                    },
                    "Day 4": {
                        name: "Squat (Volume)",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "6-8", rest: "2-3 min" },
                            { name: "Front Squat", sets: 4, reps: "8-10", rest: "2 min" },
                            { name: "Leg Press", sets: 4, reps: "12-15", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12/leg", rest: "90 sec" },
                            { name: "Calf Raises", sets: 5, reps: "15-20", rest: "60 sec" },
                        ],
                    },
                    "Day 5": {
                        name: "Bench (Volume) & OHP",
                        exercises: [
                            { name: "Bench Press", sets: 5, reps: "6-8", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 5, reps: "5", rest: "2 min" },
                            { name: "Incline Dumbbell Press", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 4, reps: "10-12", rest: "90 sec" },
                            { name: "Face Pulls", sets: 4, reps: "20", rest: "60 sec" },
                        ],
                    },
                },
            },
        },
    };

    const generateWorkoutPlan = () => {
        if (selectedGoal && selectedLevel) {
            setWorkoutPlan(workoutPrograms[selectedGoal][selectedLevel]);
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Custom <span className="text-red-500">Workout</span> Planner
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Get a personalized workout routine based on your fitness goals and experience level
                        </p>
                    </div>

                    {/* Selection Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {/* Goal Selection */}
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Target className="w-6 h-6 text-red-500" />
                                    Select Your Goal
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {[
                                    { id: "muscle-gain", name: "Build Muscle", icon: Dumbbell, desc: "Hypertrophy & Mass" },
                                    { id: "fat-loss", name: "Lose Fat", icon: Zap, desc: "Burn calories & lean out" },
                                    { id: "strength", name: "Get Stronger", icon: Award, desc: "Powerlifting & Strength" },
                                ].map((goal) => {
                                    const Icon = goal.icon;
                                    return (
                                        <button
                                            key={goal.id}
                                            onClick={() => setSelectedGoal(goal.id)}
                                            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${selectedGoal === goal.id
                                                    ? "border-red-500 bg-red-500/10"
                                                    : "border-zinc-700 bg-zinc-800 hover:border-zinc-600"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className={`w-6 h-6 ${selectedGoal === goal.id ? "text-red-500" : "text-gray-400"}`} />
                                                <div>
                                                    <div className="text-white font-semibold">{goal.name}</div>
                                                    <div className="text-sm text-gray-400">{goal.desc}</div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Level Selection */}
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-red-500" />
                                    Experience Level
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {[
                                    { id: "beginner", name: "Beginner", desc: "0-1 year training" },
                                    { id: "intermediate", name: "Intermediate", desc: "1-3 years training" },
                                    { id: "advanced", name: "Advanced", desc: "3+ years training" },
                                ].map((level) => (
                                    <button
                                        key={level.id}
                                        onClick={() => setSelectedLevel(level.id)}
                                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${selectedLevel === level.id
                                                ? "border-red-500 bg-red-500/10"
                                                : "border-zinc-700 bg-zinc-800 hover:border-zinc-600"
                                            }`}
                                    >
                                        <div className="text-white font-semibold">{level.name}</div>
                                        <div className="text-sm text-gray-400">{level.desc}</div>
                                    </button>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Generate Button */}
                    <div className="text-center mb-12">
                        <Button
                            onClick={generateWorkoutPlan}
                            disabled={!selectedGoal || !selectedLevel}
                            className="bg-red-500 hover:bg-red-600 text-white px-12"
                            size="lg"
                        >
                            Generate My Workout Plan
                        </Button>
                    </div>

                    {/* Workout Plan Display */}
                    {workoutPlan && (
                        <div className="max-w-6xl mx-auto">
                            {/* Plan Info */}
                            <Card className="bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/50 mb-8">
                                <CardHeader>
                                    <CardTitle className="text-white text-2xl">{workoutPlan.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        <div>
                                            <Calendar className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                            <div className="text-white font-semibold">{workoutPlan.duration}</div>
                                            <div className="text-sm text-gray-400">Program Length</div>
                                        </div>
                                        <div>
                                            <Dumbbell className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                            <div className="text-white font-semibold">{workoutPlan.frequency}</div>
                                            <div className="text-sm text-gray-400">Training Frequency</div>
                                        </div>
                                        <div>
                                            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                            <div className="text-white font-semibold">Progressive</div>
                                            <div className="text-sm text-gray-400">Overload</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Weekly Schedule */}
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">
                                Your <span className="text-red-500">Weekly</span> Schedule
                            </h2>

                            <div className="grid gap-6">
                                {Object.entries(workoutPlan.schedule).map(([day, workout]: [string, any]) => (
                                    <Card key={day} className="bg-zinc-900 border-zinc-800">
                                        <CardHeader>
                                            <CardTitle className="text-white flex items-center justify-between">
                                                <span className="flex items-center gap-3">
                                                    <span className="text-red-500 font-bold">{day}</span>
                                                    <span className="text-gray-400 text-lg">-</span>
                                                    <span>{workout.name}</span>
                                                </span>
                                                <Dumbbell className="w-6 h-6 text-red-500" />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="overflow-x-auto">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="border-b border-zinc-800">
                                                            <th className="text-left py-3 px-4 text-gray-400 font-semibold">Exercise</th>
                                                            <th className="text-center py-3 px-4 text-gray-400 font-semibold">Sets</th>
                                                            <th className="text-center py-3 px-4 text-gray-400 font-semibold">Reps</th>
                                                            <th className="text-center py-3 px-4 text-gray-400 font-semibold">Rest</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {workout.exercises.map((exercise: any, idx: number) => (
                                                            <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                                                                <td className="py-3 px-4 text-white">{exercise.name}</td>
                                                                <td className="py-3 px-4 text-center text-red-500 font-semibold">{exercise.sets}</td>
                                                                <td className="py-3 px-4 text-center text-white">{exercise.reps}</td>
                                                                <td className="py-3 px-4 text-center text-gray-400">{exercise.rest}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Tips */}
                            <Card className="mt-8 bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/50">
                                <CardHeader>
                                    <CardTitle className="text-white">💡 Training Tips</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Always warm up for 5-10 minutes before starting</li>
                                        <li>• Focus on proper form over heavy weight</li>
                                        <li>• Progressive overload: increase weight/reps gradually</li>
                                        <li>• Get 7-9 hours of sleep for optimal recovery</li>
                                        <li>• Stay hydrated: drink water throughout your workout</li>
                                        <li>• Track your workouts to monitor progress</li>
                                        <li>• Listen to your body and take rest days when needed</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WorkoutPlanner;
