const router = require("express").Router();
const weeklyMenus_Ctrl = require("../controllers/weeklyMenus_Controller");

router.get("/", weeklyMenus_Ctrl.getAllWeeklyMenus);
router.post("/", weeklyMenus_Ctrl.createWeeklyMenus);
// router.get("/:id", weeklyMenus_Ctrl.getUserById);
// router.put("/update/:id", weeklyMenus_Ctrl.update);
// router.delete("/delete/:id", weeklyMenus_Ctrl.deleteUser);

module.exports = router;
