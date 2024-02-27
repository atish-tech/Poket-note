const express = require("express");
const app = express();

app.use("/" , (request , response) => {
    return response.status(200).json({message : "API is running"});
});

app.listen(8000 , () => {
    console.log("Server is running");
})