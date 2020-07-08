import mongoose from 'mongoose';

export const DB = async ()=>{
   try {
       mongoose.connect('mongodb://localhost:27017/DB', {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });

   console.log('Connected to DB!');
    }catch (e) {
       console.log('oops, we have problem with DB')
       process.exit()
   };
};
