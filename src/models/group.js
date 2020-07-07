import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const Group = new Schema({
    ListOfStudents: {
        name :{
            type: String
        },
        required: true
    },
    group:{
        type: Number,
    },
    course:{
        type: Number,
    },
});

