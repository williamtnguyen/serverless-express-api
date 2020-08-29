const express = require('express');
const userController = express.Router();
const User = require('./user');

userController.post('/', async (req, res) => {
	const newUser = await User.create(req.body);
	res.status(200).send(newUser);
});

userController.get('/', async (req, res) => {
	const allUsers = await User.find();
	res.status(200).send(allUsers);
});

userController.get('/:id', async (req, res) => {
	const foundUser = await User.findById(req.params.id);
	res.status(200).send(note);
});

userController.put('/:id', async (req, res) => {
	const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, });
	res.status(200).send(updatedUser);
});

userController.delete(':id', async (req, res) => {
	const deletedUser = await User.deleteOne({ _id: req.params.id });
	res.status(200).send(deletedUser);
});

module.exports = userController;

