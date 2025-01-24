// MODELS
const UserModel = require("../models/userModel");

const authCtrl = {
  create: async (req, res, next) => {
    try {
      const newUser = new UserModel(req.body);
      const { email } = newUser;

      const userExist = await UserModel.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists." });
      }
      const savedData = await newUser.save();
      // res.status(200).json(savedData);
      res.status(200).json({ message: "User created successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  ////////
  // GET ALL USERS
  ////////
  getAllUsers: async (req, res, next) => {
          // res.json("Bienvenue sur mon serveur");
    try {
      const userData = await UserModel.find();
      if (!userData || userData.length === 0) {
        return res.status(404).json({ message: "User data not found." });
      }
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  ////////
  // GET USER
  ////////
  getUserById: async (req, res, next) => {
      // res.json("Bienvenue sur mon serveur");
    try {
      const user = await UserModel.findById(req.params.id);

      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  ////////
  // UPDATE USER
  ////////
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const userExist = await UserModel.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User not found." });
      }
      const updatedData = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      // res.status(200).json(updatedData);
      res.status(200).json({ message: "User Updated successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  ////////
  // DELETE USER
  ////////
  deleteUser: async (req, res, next) => {
    try {
      await UserModel.findByIdAndDelete(req.params.id);
      res.status(201).json("The list has been delete...");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authCtrl;
