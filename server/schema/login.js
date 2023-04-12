const express = require("express");
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: String,
  password: {type: String}
});


module.exports = mongoose.model('Login', loginSchema);

