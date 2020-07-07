import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const Teachers = new Schema({
    name: {
        type: String,
        required: true,
    },
    lessons: {
        type: String,
    }
})
