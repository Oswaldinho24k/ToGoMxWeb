import express from 'express';
import mongoose from 'mongoose';
//models
const PORT = 8000;
const app = express();

app.get("/*", (req, res)=>{
    res.send("perro");
});

//variables de entorno
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {useMongoClient:true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//registring models
import * as Store from './models/Store';

const server = app.listen(PORT, ()=>{
   console.log("corriendo en el 8000");
});