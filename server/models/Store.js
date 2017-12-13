import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const StoreModel = new Schema({
    firebaseKey:{
        type:String,
    },
    responsable:{
        type: String
    },
    name:{
        type:String
    },
    location:{
        type:{
            type:String,
            default:"Point"
        },
        address:String,
        coordinates:[
            {
                type:Number,
                required:true
            }
        ]
    },
    photo:String
});

module.exports = mongoose.model("Store", StoreModel);