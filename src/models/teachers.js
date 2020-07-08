import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Teacher = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    lessonName:{
        type: String,
        required: true,
    },
});