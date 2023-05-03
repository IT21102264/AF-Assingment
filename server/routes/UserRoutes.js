const express = require("express");
const { UserModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const userRouter = express.Router();

userRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await UserModel.find({ _id: id });
    res.send({
      message: "User available",
      user: data,
    });
  } catch (eroor) {
    res.send({
      message: "User not found",
    });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    let data = new UserModel(req.body);
    data.save();
    res.send({
      message: "User registration successful",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});
userRouter.post("/login", async (req, res) => {
  var token = jwt.sign(req.body, "nisura");
  try {
    let data = await UserModel.find(req.body);

    res.send({
      message: "login successful",
      token: token,
      userDetails: {
        username: data[0].username,
        role: data[0].role,
      },
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.patch("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      message: "Data updated",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});
userRouter.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id }, req.body);
    res.send({
      message: "Data delted",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

module.exports = { userRouter };
