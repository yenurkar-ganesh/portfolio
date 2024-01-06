const {
  getAllProject,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllProject);
router.route("/").post(createProject);
router.route("/:id").get(getOneProject);
router.route("/:id").put(updateProject);
router.route("/:id").delete(deleteProject);

module.exports = router;
