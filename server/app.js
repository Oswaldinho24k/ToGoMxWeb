import express from 'express';
import storeRouter from "./routes/storeRoutes";
import cors from 'cors';
import bodyParser from 'body-parser'

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//routes
app.get("/", (req, res)=>{
    res.send("ToGoMX Backend");
});

app.use("/stores", storeRouter);

//export default app;
module.exports = app;

