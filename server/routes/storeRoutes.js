import express from 'express';
import mongoose from 'mongoose';
const Store = mongoose.model("Store");

const storeRouter = express.Router();

storeRouter.route("/")
    .get((req, res)=> {
        //if(req.query.genre) query.genre = req.query.genre;
        const query = req.query;
        Store.find(query, (err, stores)=>{
            if(err) {
                console.log(err);
                res.status(500).send(err);
            }else res.json(stores);
        });
    })
    .post((req,res)=>{
        const store = new Book(req.body);
        store.save();
        res.status(201).send(store);
    });


export default storeRouter;

