import "dotenv/config"
import express from "express";
import cors from "cors";
import {router} from './routes';
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express()
  
dbConnect().then(()=>{
    console.log("Connected to the DB");
})

app.use(cors());
app.use(express.json());
app.use(router);



app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
