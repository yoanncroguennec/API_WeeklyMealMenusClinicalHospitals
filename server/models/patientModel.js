const mongoose = require("mongoose");

// {
//     "avatar": "",
//     "patientLastName": "Croguennec",
//     "patientFirstName": "Yoann",
//     "patientEmail": "yoann.croguennec@gmail.com",
//     "roomNumber": "220",
//     "typeOfFeed": "aucune"
// }

const patientSchema = mongoose.model("Patient", {
  avatar: {
    type: String,
    required: true,
  },
  patientLastName: {
    type: String,
    required: true,
  },
  patientFirstName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  typeOfFeed: {
    type: String,
    required: true,
  },
});

module.exports = patientSchema;
