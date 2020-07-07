import 'dotenv/config';
import express from 'express';
import router from "./routes/index.js";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT= process.env.PORT;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

router(app);


app.listen(PORT, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log(`start on port ${PORT}`)
})

