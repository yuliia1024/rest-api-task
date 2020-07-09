import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const DB = async ()=>{
   try {
       mongoose.connect(process.env.DB_URL, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });

   console.log('Connected to DB!');
    }catch (e) {
       console.log('oops, we have problem with DB')
       process.exit()
   };
};
