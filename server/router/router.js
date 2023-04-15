const express = require("express");
const router = express.Router();
const { createNewSignUp } = require("../controllers/signUpCntrl");

router.post("/user/signUp", createNewSignUp);

module.exports = router;
