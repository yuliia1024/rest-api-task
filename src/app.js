import 'dotenv/config';
import express from 'express';
import router from "./routes/index.js";
const app = express();
const PORT= process.env.PORT;

router(app);
/*
app.get('/',(req,res)=> {
    res.send(`on port ${PORT}`);

});*/
app.listen(PORT, ()=>{
    console.log(`start on port ${PORT}`);

});

