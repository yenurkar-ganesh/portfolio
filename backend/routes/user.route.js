const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/user.controller.js");

router.route("/").get(getUsers);
router.route('/').post(createUser);

module.exports = router;
