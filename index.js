//importing modules
require("dotenv").config();


const os = require("os");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const { userModel } = require("./models");

const PORT = process.env.PORT || 3000;
const server = express();

server.use(cors());
server.use(express.json());


const app = () => {
    server.get("/", async (req, res) => {
        res.status(200).send({
            message: "Server has now started !!.",
            hostname: os.hostname(),
        })
    });

    server.get("/users", async (req, res) => {
        const users = await userModel.find();

        res.status(200).json(users);
    });

    server.post("/users", async (req, res) => {
        const payload = req.body;

        if (payload?.length) {
            await userModel.insertMany(payload);
            return res.send('inserted successfully!');
        }
        
        res.status(400).send('failed to insert!');
    });

    server.listen(PORT, () => {
        console.log(`Listening to the server on PORT:${PORT}`);
    })
}

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Mongodb connection established..');
    app();
}).catch(err => console.log(err));