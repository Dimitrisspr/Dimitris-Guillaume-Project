const express = require("express");
const app = express();
const port = 8000;
const connection = require("./connection");
const signUpRouter = require("./router/router");
const signUp = require("./schema/signUp")


app.use(express.json());

app.use("/user/signup", signUpRouter);

app.listen(port, () => {
  console.log(`our server listen on port ${port}`);
});
