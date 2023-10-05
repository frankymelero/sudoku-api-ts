import "dotenv/config"
import express from "express";
import cors from "cors";
import {router} from './routes';
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express()
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send("Bienvenido a la API. Mensaje por escribir.");
    });
    app.get('/ping', (req, res) => {
        res.send("Pong.");
        });
        app.use(router);

dbConnect().then(()=>{
    console.log("Connected to the DB");
})
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
