const express = require("express");
const { connectDb } = require("./connectDB");
const dotenv = require("dotenv");
const cors = require("cors")
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());


app.get("/" , (request , response) => {
    return response.status(200).json({message : "API is running"});
});

const noteRoutes = require("./routes/notesRoute");

connectDb();
app.use("/" ,noteRoutes)

app.listen(8000 , () => {
    console.log("Server is running");
})