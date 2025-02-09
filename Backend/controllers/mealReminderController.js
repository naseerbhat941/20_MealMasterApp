const MealReminder = require('../models/MealReminder.js');

const setReminder = async(req,res) => {
    try{
        const {user,mealplan,mealtime,message} = req.body;
        const reminder = new MealReminder({user,mealplan,mealtime,message});
        await reminder.save();
        res.status(201).json({message: 'Remainder Saved successfully!',reminder});
    }
    catch(error){
        res.status(500).json({error:'Unable to create remainder'});
    }
};

const getReminder = async(req,res) => {
    try{
        const {userId} = req.params;
        const reminders = await MealReminder.find({user:userId});
        res.status(200).json({reminders});
    }
    catch(error){
        res.status(500).json({error:"Error getting reminder"});
    }
};

module.exports = {setReminder,getReminder};