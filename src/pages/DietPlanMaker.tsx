import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Beef, Coffee, Salad, Calculator, Target, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const DietPlanMaker = () => {
    const [formData, setFormData] = useState({
        age: "",
        weight: "",
        height: "",
        gender: "male",
        goal: "maintain",
        activityLevel: "moderate",
    });

    const [dietPlan, setDietPlan] = useState<any>(null);
    const [bmi, setBmi] = useState<number | null>(null);

    const calculateBMI = () => {
        const heightInMeters = parseFloat(formData.height) / 100;
        const weightInKg = parseFloat(formData.weight);
        const bmiValue = weightInKg / (heightInMeters * heightInMeters);
        setBmi(parseFloat(bmiValue.toFixed(1)));
        return bmiValue;
    };

    const calculateCalories = () => {
        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height);
        const age = parseInt(formData.age);

        // BMR calculation (Mifflin-St Jeor Equation)
        let bmr;
        if (formData.gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Activity multiplier
        const activityMultipliers: any = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9,
        };

        let tdee = bmr * activityMultipliers[formData.activityLevel];

        // Goal adjustment
        if (formData.goal === "lose") tdee -= 500;
        if (formData.goal === "gain") tdee += 500;

        return Math.round(tdee);
    };

    const generateDietPlan = () => {
        calculateBMI();
        const calories = calculateCalories();
        const protein = Math.round((calories * 0.3) / 4);
        const carbs = Math.round((calories * 0.4) / 4);
        const fats = Math.round((calories * 0.3) / 9);

        const plan = {
            calories,
            protein,
            carbs,
            fats,
            meals: {
                breakfast: {
                    name: "Power Breakfast",
                    calories: Math.round(calories * 0.25),
                    items: [
                        "3 Whole Eggs (scrambled or boiled)",
                        "2 Slices Whole Wheat Toast",
                        "1 Cup Oatmeal with Berries",
                        "1 Banana",
                        "Black Coffee or Green Tea",
                    ],
                },
                midMorning: {
                    name: "Mid-Morning Snack",
                    calories: Math.round(calories * 0.1),
                    items: [
                        "1 Apple or Orange",
                        "Handful of Almonds (10-12)",
                        "Protein Shake (optional)",
                    ],
                },
                lunch: {
                    name: "Balanced Lunch",
                    calories: Math.round(calories * 0.3),
                    items: [
                        "Grilled Chicken Breast (150g)",
                        "Brown Rice (1 cup)",
                        "Mixed Vegetables (broccoli, carrots)",
                        "Side Salad with Olive Oil",
                    ],
                },
                afternoon: {
                    name: "Afternoon Snack",
                    calories: Math.round(calories * 0.1),
                    items: [
                        "Greek Yogurt (1 cup)",
                        "Mixed Berries",
                        "Handful of Walnuts",
                    ],
                },
                dinner: {
                    name: "Lean Dinner",
                    calories: Math.round(calories * 0.25),
                    items: [
                        "Grilled Fish or Lean Beef (150g)",
                        "Quinoa or Sweet Potato",
                        "Steamed Vegetables",
                        "Green Salad",
                    ],
                },
            },
        };

        setDietPlan(plan);
    };

    const getBMICategory = (bmiValue: number) => {
        if (bmiValue < 18.5) return { text: "Underweight", color: "text-blue-500" };
        if (bmiValue < 25) return { text: "Normal", color: "text-green-500" };
        if (bmiValue < 30) return { text: "Overweight", color: "text-yellow-500" };
        return { text: "Obese", color: "text-red-500" };
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Custom <span className="text-red-500">Diet Plan</span> Maker
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Get a personalized nutrition plan based on your goals, body type, and activity level
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Input Form */}
                        <Card className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Calculator className="w-6 h-6 text-red-500" />
                                    Your Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-gray-300">Age</Label>
                                        <Input
                                            type="number"
                                            placeholder="25"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-gray-300">Gender</Label>
                                        <select
                                            value={formData.gender}
                                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-gray-300">Weight (kg)</Label>
                                        <Input
                                            type="number"
                                            placeholder="70"
                                            value={formData.weight}
                                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-gray-300">Height (cm)</Label>
                                        <Input
                                            type="number"
                                            placeholder="175"
                                            value={formData.height}
                                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-gray-300">Fitness Goal</Label>
                                    <select
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                    >
                                        <option value="lose">Lose Weight</option>
                                        <option value="maintain">Maintain Weight</option>
                                        <option value="gain">Gain Muscle</option>
                                    </select>
                                </div>

                                <div>
                                    <Label className="text-gray-300">Activity Level</Label>
                                    <select
                                        value={formData.activityLevel}
                                        onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                                        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
                                    >
                                        <option value="sedentary">Sedentary (little/no exercise)</option>
                                        <option value="light">Light (1-3 days/week)</option>
                                        <option value="moderate">Moderate (3-5 days/week)</option>
                                        <option value="active">Active (6-7 days/week)</option>
                                        <option value="veryActive">Very Active (2x per day)</option>
                                    </select>
                                </div>

                                <Button
                                    onClick={generateDietPlan}
                                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                                    size="lg"
                                >
                                    Generate My Diet Plan
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Results */}
                        {dietPlan && (
                            <div className="space-y-6">
                                {/* BMI Card */}
                                {bmi && (
                                    <Card className="bg-zinc-900 border-zinc-800">
                                        <CardHeader>
                                            <CardTitle className="text-white flex items-center gap-2">
                                                <TrendingUp className="w-6 h-6 text-red-500" />
                                                Your BMI
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-center">
                                                <div className="text-5xl font-bold text-white mb-2">{bmi}</div>
                                                <div className={`text-xl font-semibold ${getBMICategory(bmi).color}`}>
                                                    {getBMICategory(bmi).text}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Macros Card */}
                                <Card className="bg-zinc-900 border-zinc-800">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center gap-2">
                                            <Target className="w-6 h-6 text-red-500" />
                                            Daily Targets
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-4 bg-zinc-800 rounded-lg">
                                                <div className="text-3xl font-bold text-red-500">{dietPlan.calories}</div>
                                                <div className="text-sm text-gray-400">Calories</div>
                                            </div>
                                            <div className="text-center p-4 bg-zinc-800 rounded-lg">
                                                <div className="text-3xl font-bold text-blue-500">{dietPlan.protein}g</div>
                                                <div className="text-sm text-gray-400">Protein</div>
                                            </div>
                                            <div className="text-center p-4 bg-zinc-800 rounded-lg">
                                                <div className="text-3xl font-bold text-green-500">{dietPlan.carbs}g</div>
                                                <div className="text-sm text-gray-400">Carbs</div>
                                            </div>
                                            <div className="text-center p-4 bg-zinc-800 rounded-lg">
                                                <div className="text-3xl font-bold text-yellow-500">{dietPlan.fats}g</div>
                                                <div className="text-sm text-gray-400">Fats</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>

                    {/* Meal Plan */}
                    {dietPlan && (
                        <div className="mt-12 max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                                Your <span className="text-red-500">Daily</span> Meal Plan
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Object.entries(dietPlan.meals).map(([key, meal]: [string, any]) => {
                                    const icons: any = {
                                        breakfast: Coffee,
                                        midMorning: Apple,
                                        lunch: Beef,
                                        afternoon: Salad,
                                        dinner: Beef,
                                    };
                                    const Icon = icons[key];

                                    return (
                                        <Card key={key} className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-all">
                                            <CardHeader>
                                                <CardTitle className="text-white flex items-center gap-2">
                                                    <Icon className="w-5 h-5 text-red-500" />
                                                    {meal.name}
                                                </CardTitle>
                                                <p className="text-sm text-gray-400">{meal.calories} calories</p>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    {meal.items.map((item: string, idx: number) => (
                                                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                                            <span className="text-red-500 mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            {/* Tips */}
                            <Card className="mt-8 bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/50">
                                <CardHeader>
                                    <CardTitle className="text-white">💡 Pro Tips</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Drink at least 3-4 liters of water daily</li>
                                        <li>• Eat every 2-3 hours to keep metabolism active</li>
                                        <li>• Adjust portions based on your hunger and energy levels</li>
                                        <li>• Meal prep on Sundays to stay consistent</li>
                                        <li>• Track your progress weekly and adjust as needed</li>
                                        <li>• Consult with a nutritionist for personalized advice</li>
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

export default DietPlanMaker;
