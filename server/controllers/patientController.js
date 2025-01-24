// MODELS
const PatientModel = require("../models/patientModel");

const patient_Ctrl = {
  ////////
  // GET ALL WEEKLY MEAL MENUS
  ////////
  getAllPatients: async (req, res, next) => {
    // res.json("Bienvenue sur mon serveur");
    try {
      const patients = await PatientModel.find();
      if (!patients || patients.length === 0) {
        return res.status(404).json({ message: "Patients data not found." });
      }
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  ////////
  // POST PATIENT
  ////////
  createPatient: async (req, res, next) => {
    try {
      const newPatient = new PatientModel(req.body);

      const savedData = await newPatient.save();
      // res.status(200).json(savedData);
      res.status(200).json({ message: "Patient created successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },
};

module.exports = patient_Ctrl;
