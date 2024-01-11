const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getAllProject,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes
router.route("/").get(getAllProject).post(upload.single("image"), createProject);
router.route("/:id").get(getOneProject).put(updateProject).delete(deleteProject);

module.exports = router;