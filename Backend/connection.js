const mongoose = require("mongoose");

// MongoDB Connection
mongoose
  .connect("mongodb+srv://rohit:rohit123@tasktracker.wdjpgcp.mongodb.net/?retryWrites=true&w=majority&appName=TaskTracker") // Replace with your MongoDB URI
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

module.exports = mongoose;
