const router = require("express").Router();
const patient_Ctrl = require("../controllers/patientController");

router.get("/", patient_Ctrl.getAllPatients);
router.post("/", patient_Ctrl.createPatient);
// router.get("/:id", patient_Ctrl.getUserById);
// router.put("/update/:id", patient_Ctrl.update);
// router.delete("/delete/:id", patient_Ctrl.deleteUser);

module.exports = router;
