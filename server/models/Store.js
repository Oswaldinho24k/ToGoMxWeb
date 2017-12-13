import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Store = new Schema({
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

export default mongoose.model("Store", Store);