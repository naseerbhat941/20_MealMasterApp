import cron from 'node-cron'
import moment from 'moment';
import MealReminder from'../models/MealReminder.js'
cron.schedule('* * * * *',async() => {
    const now = moment().toDate();
    const reminders = await MealReminder.find({mealtime: {$lte:now}});

    reminders.forEach(async(reminder) => {
        console.log(`Remainder: ${reminder.message} to user: ${reminder.user}`);
        await MealReminder.deleteOne({id: reminder._id});
    })
});
export default  cron;