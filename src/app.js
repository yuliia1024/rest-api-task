import dotenv from 'dotenv';
dotenv.config({ path: './src/.config' });
import express from 'express';
import {DB} from './db/db';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
const PORT =  process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

const begin = async () =>{
    console.log('Try to connect to DB...');
    await DB();
    app.listen(PORT, () =>
        console.log(`Your server is running on port ${PORT}`)
    );
}
begin();

