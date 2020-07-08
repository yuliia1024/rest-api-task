import mongoose from 'mongoose';
import {LessonSchema} from '../models/lessons';
const Lessons = mongoose.model('Lessons', LessonSchema);

export const addNewLesson =(req,res)=>{
    let newLesson = new Lessons(req.body);
    newLesson .save((err, lessons) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(lessons);
    });
};
export const getLessons = (req, res) => {
    Lessons.find({}, (err, lessons) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(lessons);
    });

}
export const getLessonById = (req, res) => {
    Lessons.findById(req.params.lessonsID, (err, lessons) => {
        if (err) {
            return res.send(404, `we have problem with db ${err}`);;
        }
        res.json(lessons);
    });
}

export const changeLesson = (req, res) => {
    Lessons.findOneAndUpdate({ _id: req.params.lessonsID}, req.body, { new: true, useFindAndModify: false }, (err, lessons) => {
        if (err) {
            res.send(err);
        }
        res.json(lessons);
    });
}

export const deleteLesson = (req, res) => {
    Lessons.remove({ _id: req.params.lessonsID}, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted lessons'});
    });
}