//importing modules
const express = require("express");
const cors = require("cors");

//config
const PORT = process.env.PORT || 3000;

//instance
const server = express();

//middleware
server.use(cors());

//routes
server.get("/", (req, res) => {
 console.log("Server has now started... !!");
 res.status(200).send("Server has now started !!.")
});

//listener
server.listen(PORT, () => {
 console.log(`Listening to the server on PORT:${PORT}`);
})