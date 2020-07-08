import mongoose from 'mongoose';
import {TeacherSchema} from '../models/teachers';
const Teacher = mongoose.model('Teacher', TeacherSchema);

export const addNewTeacher =(req,res)=>{
    let newTeacher = new Teacher(req.body);
    newTeacher.save((err, teacher) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(teacher);
    });
};
export const getTeacher = (req, res) => {
    Teacher.find({}, (err, teacher) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(teacher);
    });

}
export const getTeacherById = (req, res) => {
    Teacher.findById(req.params.teacherID, (err, teacher) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(teacher);
    });
}
