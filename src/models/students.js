import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const Students = new Schema({
    name: {
        type: String,
        required:true

    },
    group:{
        type: Number,
    },
    course:{
        type: Number,
    },
})