const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 4000;

//mongoose.connect("mongodb+srv://admin:admin123@mycluster.kg0epal.mongodb.net/")
let db = mongoose.connection;
db.on("error", console.error.bind(console,"Connection Error."));

db.once("open", () => console.log("Connected to MongoDB."));

app.get('/hello', (req,res) => {
	res.send("Hello from our new Express API!")
})

app.use(express.json())

const taskRoutes = require('./routes/taskRoutes');
console.log(taskRoutes);

app.use('/', taskRoutes);
app.use('/tasks', taskRoutes);
//mongoose.connect("mongodb+srv://admin:admin123@mycluster.kg0epal.mongodb.net/")

app.listen(port, () => console.log(`Server is running at port ${port}`));