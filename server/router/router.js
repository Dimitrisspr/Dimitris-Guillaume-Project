const express = require("express");
const router = express.Router();
const { createNewSignup } = require("../controllers/signUpCntrl");

router.post("/user/signup", () => {
  return createNewSignup;
});

module.exports = router;
