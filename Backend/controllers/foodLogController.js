import FoodLog from "../models/FoodLog.js";

export const foodEntry = async (req, res) => {
  try {
    const { user, product, NutrientsPortion, nutrition } = req.body;
    const newEntry = new FoodLog({ user, product, NutrientsPortion, nutrition });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: "Unable to add food entry!" });
  }
};

export const getDailyIntake = async (req, res) => {
  try {
    const userId = req.params.userId;
    const logs = await FoodLog.find({ user: userId, date: { $gte: new Date().setHours(0, 0, 0, 0) } });
    const totalIntakes = logs.reduce(
      (acc, log) => ({
        calories: acc.calories + log.nutrition.calories,
        fats: acc.fats + log.nutrition.fats,
        protein: acc.protein + log.nutrition.protein,
        carbohydrates: acc.carbohydrates + log.nutrition.carbohydrates
      }),
      { calories: 0, fats: 0, protein: 0, carbohydrates: 0 }
    );
    res.status(200).json({ userId, DailyIntakes: totalIntakes });
  } catch (error) {
    res.status(500).json({ error: "Error fetching daily intake!" });
  }
};
