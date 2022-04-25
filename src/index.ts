import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {pagination} from "typeorm-pagination";

dotenv.config();

const PORT =  process.env.PORT || 5432;

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());

app.use(pagination);

app.get("/", (_, res) => {
    res.status(200).json({
        success: true,
        message: "U have successfully created an API"
    });
});

createConnection()
    .then(async ()=>{
        app.listen(PORT , () => {
            console.log(`Connected to db and server started at port ${PORT}`);   
        })
    })
    .catch(e=>console.log(e));





