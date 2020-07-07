import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const Lessons = new Schema({
    timetable: {
        type: String,
        required: true,
    },
    groupNumber:{
        type: Number,
        required: true,
    },
    teacher: {
        type: String,
    },
    courseName: {
        type: String
    }
})

