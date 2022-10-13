// connect to the database (mongodb)

const mongoose = require("mongoose");
const db = mongoose.connection;
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/" + process.env.DB_NAME;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));
