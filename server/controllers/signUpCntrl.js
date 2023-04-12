const express = require("express");
const mongoose = require("mongoose");
const signUp = require("../schema/signUp");


const createNewSignUp = async (req, res) => {
  try {
    let newUser = await signUp.create(req.body);
    res.send({ msg: "account created", newUser });
  } catch (error) {
    res.send({ msg: "error", error });
    console.log(error);
  }
};

module.exports = {createNewSignUp};