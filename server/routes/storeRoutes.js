import express from 'express';
import mongoose from 'mongoose';
const Store = mongoose.model("Store");

const storeRouter = express.Router();

storeRouter.route("/")
    .get((req, res)=> {
        Store.find(stores => {
            res.status(200).json(stores);
            console.log(stores);
        })
    });


export default storeRouter;

