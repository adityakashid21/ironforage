import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Dumbbell, Heart, Zap, Target, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ClassBooking = () => {
    const [selectedClass, setSelectedClass] = useState<any>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");

    const classes = [
        {
            id: 1,
            name: "Strength Training",
            icon: Dumbbell,
            instructor: "John Smith",
            duration: "60 min",
            intensity: "High",
            maxCapacity: 15,
            description: "Build muscle and increase strength with compound movements",
            schedule: [
                { day: "Monday", times: ["06:00 AM", "05:00 PM"] },
                { day: "Wednesday", times: ["06:00 AM", "05:00 PM"] },
                { day: "Friday", times: ["06:00 AM", "05:00 PM"] },
            ],
        },
        {
            id: 2,
            name: "HIIT Cardio",
            icon: Zap,
            instructor: "Sarah Johnson",
            duration: "45 min",
            intensity: "Very High",
            maxCapacity: 20,
            description: "High-intensity interval training for maximum calorie burn",
            schedule: [
                { day: "Tuesday", times: ["07:00 AM", "06:00 PM"] },
                { day: "Thursday", times: ["07:00 AM", "06:00 PM"] },
                { day: "Saturday", times: ["09:00 AM"] },
            ],
        },
        {
            id: 3,
            name: "Yoga & Flexibility",
            icon: Heart,
            instructor: "Emma Davis",
            duration: "60 min",
            intensity: "Low",
            maxCapacity: 25,
            description: "Improve flexibility, balance, and mental clarity",
            schedule: [
                { day: "Monday", times: ["07:00 AM", "06:00 PM"] },
                { day: "Wednesday", times: ["07:00 AM", "06:00 PM"] },
                { day: "Friday", times: ["07:00 AM", "06:00 PM"] },
            ],
        },
        {
            id: 4,
            name: "CrossFit",
            icon: Target,
            instructor: "Mike Wilson",
            duration: "60 min",
            intensity: "Very High",
            maxCapacity: 12,
            description: "Functional fitness combining cardio, weightlifting, and gymnastics",
            schedule: [
                { day: "Tuesday", times: ["06:00 AM", "05:00 PM"] },
                { day: "Thursday", times: ["06:00 AM", "05:00 PM"] },
                { day: "Saturday", times: ["08:00 AM"] },
            ],
        },
    ];

    const getIntensityColor = (intensity: string) => {
        switch (intensity) {
            case "Low":
                return "text-green-500";
            case "Medium":
                return "text-yellow-500";
            case "High":
                return "text-orange-500";
            case "Very High":
                return "text-red-500";
            default:
                return "text-gray-500";
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
                            Book Your <span className="text-red-500">Fitness</span> Class
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Join our expert-led classes and take your fitness to the next level
                        </p>
                    </div>

                    {/* Classes Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {classes.map((classItem) => {
                            const Icon = classItem.icon;
                            return (
                                <Card
                                    key={classItem.id}
                                    className={`bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all cursor-pointer ${selectedClass?.id === classItem.id ? "border-red-500 ring-2 ring-red-500/50" : ""
                                        }`}
                                    onClick={() => setSelectedClass(classItem)}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 bg-red-500/10 rounded-lg">
                                                    <Icon className="w-6 h-6 text-red-500" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-white text-xl">{classItem.name}</CardTitle>
                                                    <p className="text-sm text-gray-400">with {classItem.instructor}</p>
                                                </div>
                                            </div>
                                            {selectedClass?.id === classItem.id && (
                                                <Check className="w-6 h-6 text-red-500" />
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-gray-300">{classItem.description}</p>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-zinc-800 rounded-lg">
                                                <Clock className="w-5 h-5 text-red-500 mx-auto mb-1" />
                                                <div className="text-sm text-gray-400">{classItem.duration}</div>
                                            </div>
                                            <div className="text-center p-3 bg-zinc-800 rounded-lg">
                                                <Users className="w-5 h-5 text-red-500 mx-auto mb-1" />
                                                <div className="text-sm text-gray-400">Max {classItem.maxCapacity}</div>
                                            </div>
                                            <div className="text-center p-3 bg-zinc-800 rounded-lg">
                                                <Zap className="w-5 h-5 text-red-500 mx-auto mb-1" />
                                                <div className={`text-sm font-semibold ${getIntensityColor(classItem.intensity)}`}>
                                                    {classItem.intensity}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Schedule */}
                                        <div className="pt-4 border-t border-zinc-800">
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-red-500" />
                                                Weekly Schedule
                                            </h4>
                                            <div className="space-y-2">
                                                {classItem.schedule.map((schedule, idx) => (
                                                    <div key={idx} className="flex justify-between items-center text-sm">
                                                        <span className="text-gray-400">{schedule.day}</span>
                                                        <div className="flex gap-2">
                                                            {schedule.times.map((time, timeIdx) => (
                                                                <span key={timeIdx} className="text-red-500 font-medium">
                                                                    {time}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Booking Form */}
                    {selectedClass && (
                        <div className="mt-12 max-w-2xl mx-auto">
                            <Card className="bg-zinc-900 border-red-500">
                                <CardHeader>
                                    <CardTitle className="text-white text-2xl">
                                        Book {selectedClass.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <label className="text-gray-300 block mb-2">Select Day & Time</label>
                                        <select
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                        >
                                            <option value="">Choose a time slot...</option>
                                            {selectedClass.schedule.map((schedule: any, idx: number) =>
                                                schedule.times.map((time: string, timeIdx: number) => (
                                                    <option key={`${idx}-${timeIdx}`} value={`${schedule.day} ${time}`}>
                                                        {schedule.day} at {time}
                                                    </option>
                                                ))
                                            )}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-gray-300 block mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-300 block mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+1 234 567 8900"
                                                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-gray-300 block mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-gray-300 block mb-2">Special Requirements (Optional)</label>
                                        <textarea
                                            placeholder="Any injuries or special needs we should know about?"
                                            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white h-24"
                                        />
                                    </div>

                                    <Button
                                        className="w-full bg-red-500 hover:bg-red-600 text-white"
                                        size="lg"
                                        disabled={!selectedTime}
                                    >
                                        Confirm Booking
                                    </Button>

                                    <p className="text-sm text-gray-400 text-center">
                                        You'll receive a confirmation email with class details
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Free Cancellation</h3>
                                <p className="text-gray-400 text-sm">Cancel up to 2 hours before class</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Small Groups</h3>
                                <p className="text-gray-400 text-sm">Limited spots for personalized attention</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Expert Trainers</h3>
                                <p className="text-gray-400 text-sm">Certified professionals with years of experience</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ClassBooking;
