const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  storeID: String,
});

//Creating User schema functions
userSchema.statics.signup = async function (
  userName,
  password,
  contact,
  address,
  image,
  role
) {
  const exist = await this.find({ userName });

  if (!userName || !password || !contact || !address)
    throw Error("Please fill all fields");
  if (!validator.isEmail(userName)) throw Error("Email is invalid");
  if (exist.length === 1)
    if (exist[0].role == role) throw Error("Email is already in use");

  if (exist.length > 1) throw Error("Email is already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const singedUser = await this.create({
    userName,
    password: hash,
    contact,
    address,
    image,
    role,
  });

  return singedUser; //To return a signedup new user object
};

userSchema.statics.login = async function (userName, password, role) {
  if (!userName || !password) throw Error("Please fill all fields");

  const user = await this.findOne({ userName, role });
  if (!user) throw Error("User Name doesn't exist");

  const match = await bcrypt.compare(password, user.password); //returns true or false

  if (!match) throw Error("Incorrect Password");

  return user;
};

module.exports = mongoose.model("User", userSchema);
