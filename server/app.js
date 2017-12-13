import express from 'express';
import storeRouter from "./routes/storeRoutes";

const app = express();
//routes
app.get("/", (req, res)=>{
    res.send("ToGoMX Backend");
});
app.use("/stores", storeRouter);

//export default app;
module.exports = app;

