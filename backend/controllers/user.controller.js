const userSchema = require("../model/user.model.js");

//GET || get users
// @route new/user
const getUsers = async (req, res) => {
  try {
    const findUser = await userSchema.find();
    if (!findUser) {
      return res.status(404).json({ msg: "User Not Found" });
    }
    res.status(200).json(findUser);
  } catch (error) {
    res.status(400).json(`Error while fetching the users ${error} `);
  }
};

// create User
// new/user
const createUser = async (req, res) => {
  try {
    const { username, fullName, password, email } = req.body;

    // Checking the all fields are ok or not
    if (!username || !fullName || !password || !email) {
      res.status(400).json({ message: `All Fields are required` });
    }

    //check if user already exists in database
    const findUser = await userSchema.findOne({
      $or: [{ username }, { email }],
    });
    if (findUser) {
      throw new Error(`The User Already exist with this Email OR Username!!`);
    }

    // creating a user
    const createNewUser = await userSchema.create(req.body);
    res.status(201).json(createNewUser);
  } catch (error) {
    // res.status(400).json(`Error while Creating a User ${error} `);
    return res.status(500).json(`Unexpected error: ${error}`);
  }
};

module.exports = { getUsers, createUser };
