import mongoose from 'mongoose';

mongoose.connect(process.env.DBurl,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });