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

import { login, register, loginRequired } from '../controllers/user';

const routes = (app) => {
    app.route('/student')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getStudent)
        .post(loginRequired, addNewStudent);
    app.route('/student/:studentID')
        .get(getStudentById)
        .put(loginRequired, updateStudent)
        .delete(loginRequired, deleteStudent);


    app.route('/teachers')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getTeacher)

        .post(loginRequired, addNewTeacher);
    app.route('/teachers/:teacherID')
        .get(getTeacherById);


    app.route('/lessons')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        },  getLessons)
        .post(loginRequired, addNewLesson);

    app.route('/lessons/:lessonsID')
        .put(loginRequired, changeLesson)
        .get(getLessonById)
        .delete(loginRequired, deleteLesson);


    app.route('/auth/register')
        .post(register);

    app.route('/login')
        .post(login);

}
export default routes;