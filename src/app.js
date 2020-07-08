import express from 'express';
import {DB} from './db/db';
import bodyParser from 'body-parser';
import routes from './routes/students';
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const begin = async () =>{
    console.log('Try to connect to DB...');
    await DB();
    app.listen(PORT, () =>
        console.log(`Your server is running on port ${PORT}`)
    );
}
begin();
routes(app);
