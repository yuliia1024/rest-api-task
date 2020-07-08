import express from "express";

import {addNewStudent,
        getStudentById,
        getStudent,
        updateStudent,
        deleteStudent
        } from '../controllers/students';

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

}
export default routes;