import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    group: {
        type: String,
        required: true,
        },
});//export default mongoose.model('Students', Students);
