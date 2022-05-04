const express = require("express");
const connect = require("./src/configs/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Controllers
const auth = require("./src/controllers/auth.controller");
const {
  register,
  login,
  loginForDeploy,
} = require("./src/controllers/auth.controller");
app.use("/api/login", login);
app.use("/api/register", register);

const postController = require("./src/controllers/post.controller");
app.use("/api/posts", postController);

const commentController = require("./src/controllers/comment.controller");
app.use("/api/comments", commentController);

const userController = require("./src/controllers/user.controller");
app.use("/api/users.json", userController);

const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  });


app.get('/', (req, res)=>{
  res.send("API running!");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
