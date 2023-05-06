const express = require("express");
const { UserModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserModel.findById(id);
    if (data) {
      res.send({
        message: "User available",
        user: data,
      });
    } else {
      res.send({
        message: "User not found",
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    const data = new UserModel(req.body);
    await data.save();
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
  try {
    const data = await UserModel.findOne(req.body);
    if (data) {
      const token = jwt.sign(req.body, "nisura");
      res.send({
        message: "login successful",
        token,
        userDetails: {
          username: data.username,
          role: data.role,
        },
      });
    } else {
      res.send({
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate(id, req.body);
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
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.send({
      message: "Data deleted",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

module.exports = { userRouter };
