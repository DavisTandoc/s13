const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
	    default: "pending"
	}
});
const taskUser = new mongoose.Schema({
	username: String,
	password: String
});


module.exports = mongoose.model("Task", taskSchema);
module.exports = mongoose.model("User", taskUser);