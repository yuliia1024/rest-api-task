import mongoose from 'mongoose';
import {StudentSchema} from '../models/students';
const Student = mongoose.model('Student', StudentSchema);

export const addNewStudent =(req,res)=>{
    let newStudent = new Student(req.body);
    newStudent.save((err, student) => {
        if (err) {
            res.send(err);
        }
        res.json(student);
    });
};
export const getStudent = (req, res) => {
    Student.find({}, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json(student);
    });

}
export const getStudentById = (req, res) => {
    Student.findById(req.params.studentID, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json(student);
    });
}

export const updateStudent = (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.studentID}, req.body, { new: true, useFindAndModify: false }, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json(student);
    });
}

export const deleteStudent = (req, res) => {
    Student.remove({ _id: req.params.studentID}, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted student'});
    });
}
