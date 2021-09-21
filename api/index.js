const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUndefinedTopolofy: true,
})

app.listen(8800, () => {
    console.log("Backend server is runnig");
});