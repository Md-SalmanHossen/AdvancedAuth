
import express from 'express';
import  ConnectedDB  from './src/config/ConnectedDB.js';

import dotenv from 'dotenv';
dotenv.config();


const app =express();


ConnectedDB();
console.log('mongo_uri:', process.env.MONGO_URI);


app.get('/',(req,res)=>{
   res.send('hello world 123');
})

app.listen(3000,()=>{
   console.log('server is running....')
})