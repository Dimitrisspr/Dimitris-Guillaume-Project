const express = require("express");
const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  username: String,
  password: {type: String, minLength: 10},
  email: String,
});


module.exports = mongoose.model('Signup', signUpSchema);