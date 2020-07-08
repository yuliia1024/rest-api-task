//import express from "express";

import {addNewStudent,
        getStudentById,
        getStudent,
        updateStudent,
        deleteStudent
} from '../controllers/students';
import {addNewTeacher,
        getTeacher,
        getTeacherById,
} from '../controllers/teachers';
import {addNewLesson,
        getLessons,
        getLessonById,
        changeLesson,
        deleteLesson,
}from '../controllers/lessons'

const routes = (app) => {
    app.route('/student')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getStudent)
        .post(addNewStudent);
    app.route('/student/:studentID')
        .get(getStudentById)
        .put(updateStudent)
        .delete(deleteStudent);


    app.route('/teachers')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getTeacher)

        .post(addNewTeacher);
    app.route('/teachers/:teacherID')
        .get(getTeacherById);


    app.route('/lessons')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getLessons)

        .post(addNewLesson);
    app.route('/lessons/:lessonsID')
        .put(changeLesson)
        .get(getLessonById)
        .delete(deleteLesson)
}
export default routes;