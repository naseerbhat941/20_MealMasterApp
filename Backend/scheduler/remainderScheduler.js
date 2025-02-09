const cron = require('node-cron');
const moment = require('moment');
const MealReminder = require('../models/MealReminder.js');
cron.schedule('* * * * *',async() => {
    const now = moment().toDate();
    const reminders = await MealReminder.find({mealtime: {$lte:now}});

    reminders.forEach(async(reminder) => {
        console.log(`Remainder: ${reminder.message} to user: ${reminder.user}`);
        await MealReminder.deleteOne({id: reminder._id});
    })
});

module.exports = cron;