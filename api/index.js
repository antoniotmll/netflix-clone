const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUndefinedTopology: true,
})

app.listen(8800, () => {
    console.log("Backend server is runnig");
});