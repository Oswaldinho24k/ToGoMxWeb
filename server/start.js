//variables de entorno
const cool = require('cool-ascii-faces');
import mongoose from "mongoose";
const PORT = 8000;
//import app from './app';

require('dotenv').config({ path: 'variables.env' });
mongoose.connect(process.env.DATABASE, {useMongoClient:true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//registring models
require("./models/Store");

//app
const app = require("./app");

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

//app.listen(PORT, ()=>{
  //  console.log("corriendo en el 8000");
//});