const express = require("express");
const app = express();
const port = 8000;
const connection = require("./connection");
//const signUpRouter = require("./router/router");
//const Signup = require("./schema/Signup")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const controller = require("./controllers/signUpCntrl")
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const privateCode = process.env.PRIVATE_CODE;
//const verifiedToken = require("./authentification")

const signUpSchema = new mongoose.Schema({
  username: String,
  password: String,
  // email: String,
});

const Signup = mongoose.model("Signup", signUpSchema);

//sign up

app.post("/user/signup", async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).send({ msg: "All fields are required" });
    }
    let findUser = await Signup.findOne({ username });
    if (findUser) {
      
      return res.status(401).send({ msg: "Username already exists." });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);
      let newSignedUp = await Signup.create({
        username: username,
        password: hashedPassword,
      });

      return res.status(200).send({ msg: "signed up successfully", newSignedUp });
    }
  } catch (error) {
    res.status(500).send({ msg: "error", error });
    console.log(error);
  }
});

//login

app.post("/user/login",  async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ msg: "Both username and password are required!" });
    }
    let newUser = await Signup.findOne({ username });
    if (!newUser) {
      res.status(400).send({ msg: "you need to sign up first" });
    } else {
      let comparedPass = await bcrypt.compare(password, newUser.password);
      if (!comparedPass) {
        return res.status(400).send({ msg: "password incorrect" });
      } else {
        //token
        const token = jwt.sign({ userId: newUser._id }, privateCode);
        res.status(200).send(token)
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`our server listen on port ${port}`);
});
