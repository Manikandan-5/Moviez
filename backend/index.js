const express=require('express');
const mongoose=require("mongoose")
const movies=require('../backend/models/moviemodel')
const movie=require('./routes/movie')
const app=express()
const cors=require('cors')

require('dotenv').config();
app.use(express.json())
app.use(cors())

app.get('/',async(req,res)=>{
    const products=await movies.find({})
    res.json({
        success:true,
        products
    })
})

app.use('/api/v1/',movie)


mongoose.set('strictQuery', true);
a=mongoose.connect(process.env.MONGO_DB,('strictQuery', false),('strictQuery', true)).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Local Host Succesfully${process.env.PORT}`);
        console.log("MONGO_DB Conected");
    })
})
.catch((err)=>{
    console.log(err.message);
})










