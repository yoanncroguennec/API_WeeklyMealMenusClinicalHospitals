const mongoose = require("mongoose");

// {
//     "day": "Lundi",
//     "lunchOfTheDay": "Déjeuner",
//     "starter": "Tomates",
//     "mainCourse_01": "Risolette de Veau",
//     "mainCourse_02": "Semoule",
//     "cheese": false,
//     "dessert": "Yaourt aux fruits"
// }

const WeeklyMenus_Schema = mongoose.model("WeeklyMenus", {
  day: {
    type: String,
    required: true,
  },
  lunchOfTheDay: {
    type: String,
    required: true,
  },
  starter: {
    type: String,
    required: true,
  },
  mainCourse_01: {
    type: String,
    required: true,
  },
  mainCourse_02: {
    type: String,
    required: true,
  },
  cheese: {
    type: Boolean,
    required: true,
  },
  dessert: {
    type: String,
    required: true,
  },
});

module.exports = WeeklyMenus_Schema;
