const express = require("express");
const router = express.Router();
const { sendMail } = require("../controllers/mail.controller.js");

// router.route('/').post(sendMail);

router.route('/').post(sendMail);

module.exports = router;


