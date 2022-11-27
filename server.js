const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://jsmatts04:Chachan*1942@cluster0.bdqu7rq.mongodb.net/ShoeStoreDB")

//require route
app.use("/", require("./routes/userRoute"));

app.listen(3001, function(){
    console.log("express server is running on port 3001");
})