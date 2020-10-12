//import dependencies
const express = require("express");
const app = express();
require("dotenv").config();
//allow parsing on request bodies
app.use(express.json());
//import route for Api





//start server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("Server listening on port ", port);

})