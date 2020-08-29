const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	biography: String,
});

module.exports = mongoose.model('User', UserSchema);

