const { User } = require("../models");

exports.getAllUsers = async (_, res) => {
    console.log("User -> getAllUsers");
    const users = await User.findAll();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    console.log("User -> getUserById");
    const { id } = req.params;
    const Users = await User.findByPk(id);
    res.json(Users);
};

exports.createUser = async (req, res) => {
    console.log("User -> createUser");
    const user = await new User.create(req.body);
    res.json(user);
}

exports.deleteUser = async (req, res) => {
    console.log("User -> deleteUser");
    const { id } = req.params;
    const user = User.findByPk(id);
    res.json({ message: `User ${user.firstName} ${user.lastName} has been deleted` });
};

exports.updateUser = async (req, res) => {
    console.log("User -> updateUser");
    const { id } = req.params;
    const user = await User.update(req.body, {
        returning: true,
        where: {
            id
        }
    });
    res.json(user);
};