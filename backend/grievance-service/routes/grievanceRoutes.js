const express = require("express");
const router = express.Router();
const controller = require("../controllers/grievanceController");

router.get("/", controller.getAllGrievances);
router.post("/", controller.createGrievance);
router.put("/:id", controller.updateGrievance);
router.delete("/:id", controller.deleteGrievance);

module.exports = router;