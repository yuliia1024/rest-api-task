import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Lesson = new Schema({
    lessonName: {
        type: String,
        required: true,
    },
    room: {
        type: Number,
        required: true,
    },
    lessonNumber: {
        type: Number,
        required: true,
    },
    teacher: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },
});