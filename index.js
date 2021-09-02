const express = require('express'); 
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(__dirname+'/client/dist/client'));

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname+'/client/dist/client/index.html'));
});

dotenv.config({path:"./config.env"});

mongoose.connect(process.env.URI , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))
app.listen(3000,()=>{
    console.log('app running at port 3000');
});