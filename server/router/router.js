 HEAD
const express = require("express");
const router = express.Router();
const { createNewSignUp } = require("../controllers/signUpCntrl");

router.post("/user/signUp", createNewSignUp);


 b017fdfbe7760f57028ebcc631c08037f119e42e

