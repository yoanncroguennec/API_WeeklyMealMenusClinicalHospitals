const router = require("express").Router();
const authCtrl = require("../controllers/userController");

router.post("/", authCtrl.create);
router.get("/", authCtrl.getAllUsers);
router.get("/:id", authCtrl.getUserById);
router.put("/update/:id", authCtrl.update);
router.delete("/delete/:id", authCtrl.deleteUser);

module.exports = router;
